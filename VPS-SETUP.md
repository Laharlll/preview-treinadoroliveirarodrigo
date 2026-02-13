# VPS Multi-Site Docker Setup

## Informações do Servidor

- **IP:** 31.97.139.118
- **Usuário de deploy:** deploy (com sudo sem senha)
- **Docker:** Instalado com Compose plugin
- **Reverse Proxy:** Caddy 2 (HTTPS automático via Let's Encrypt)
- **Registry:** ghcr.io/laharlll (GitHub Container Registry)
- **Rede Docker:** `proxy` (compartilhada entre todos os containers)

## Estrutura de Pastas

```
/home/deploy/
├── infra/
│   └── proxy/
│       ├── docker-compose.yml   # Caddy reverse proxy
│       └── Caddyfile             # Rotas de domínio → container
└── apps/
    ├── kyvura/
    │   ├── docker-compose.yml
    │   └── .env.production
    └── preview-ericadayanaapersonal/
        ├── docker-compose.yml
        └── .env.production
```

## Sites Ativos

| Domínio | Container | Imagem |
|---------|-----------|--------|
| kyvura.com | kyvura | ghcr.io/laharlll/kyvura-landing:latest |
| preview-ericadayanaapersonal.kyvura.com | preview-ericadayanaapersonal | ghcr.io/laharlll/preview-ericadayanaapersonal:latest |

---

## Como Adicionar um Novo Projeto

### Pré-requisitos no Projeto Local

1. Adicionar `output: "standalone"` no `next.config.ts` (para Next.js)

2. Criar `Dockerfile` na raiz:

```dockerfile
# ---------- Build stage ----------
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

RUN \
  if [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install --frozen-lockfile; \
  elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  else npm ci; fi

COPY . .

ENV NODE_ENV=production

RUN \
  if [ -f pnpm-lock.yaml ]; then pnpm build; \
  elif [ -f yarn.lock ]; then yarn build; \
  else npm run build; fi

# ---------- Runtime stage ----------
FROM node:20-alpine
WORKDIR /app

COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json

ENV PORT=3000
EXPOSE 3000

CMD ["node", "server.js"]
```

3. Criar `.dockerignore`:

```
node_modules
.next
.git
.env*
```

4. Criar `.github/workflows/docker.yml`:

```yaml
name: Build and push Docker image

on:
  push:
    branches: ["main"]

permissions:
  contents: read
  packages: write

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: docker/setup-buildx-action@v3

      - uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - uses: docker/build-push-action@v6
        with:
          context: .
          file: ./Dockerfile
          push: true
          tags: |
            ghcr.io/laharlll/NOME-DO-PROJETO:latest
            ghcr.io/laharlll/NOME-DO-PROJETO:${{ github.sha }}
```

5. Commit e push para o GitHub — a imagem será construída automaticamente na aba Actions

### Na VPS (via SSH)

Substituir `NOME-DO-PROJETO` e `DOMINIO` pelos valores reais.

```bash
# 1. Criar pasta do app
mkdir -p /home/deploy/apps/NOME-DO-PROJETO
touch /home/deploy/apps/NOME-DO-PROJETO/.env.production

# 2. Criar docker-compose.yml
cat > /home/deploy/apps/NOME-DO-PROJETO/docker-compose.yml << 'EOF'
services:
  NOME-DO-PROJETO:
    image: ghcr.io/laharlll/NOME-DO-PROJETO:latest
    container_name: NOME-DO-PROJETO
    env_file:
      - .env.production
    restart: unless-stopped
    networks:
      proxy:
        aliases:
          - NOME-DO-PROJETO

networks:
  proxy:
    external: true
EOF

# 3. Adicionar domínio no Caddyfile
# Editar /home/deploy/infra/proxy/Caddyfile e adicionar:
#
# DOMINIO {
#     encode gzip
#     reverse_proxy NOME-DO-PROJETO:3000
# }

# 4. Recarregar Caddy (sem downtime)
cd /home/deploy/infra/proxy
docker compose exec caddy caddy reload --config /etc/caddy/Caddyfile

# 5. Pull e start do novo app
cd /home/deploy/apps/NOME-DO-PROJETO
docker compose pull
docker compose up -d
```

### Para Atualizar um Projeto Existente

Após push para main (CI/CD builda a nova imagem automaticamente):

```bash
cd /home/deploy/apps/NOME-DO-PROJETO
docker compose pull
docker compose up -d
```

---

## Comandos Úteis

```bash
# Ver todos os containers rodando
docker ps

# Ver logs de um container
docker logs NOME-DO-CONTAINER -f --tail 50

# Reiniciar um app
cd /home/deploy/apps/NOME-DO-PROJETO && docker compose restart

# Reiniciar Caddy
cd /home/deploy/infra/proxy && docker compose restart

# Ver logs do Caddy
docker logs proxy-caddy -f --tail 50

# Parar um app
cd /home/deploy/apps/NOME-DO-PROJETO && docker compose down

# Limpar imagens antigas
docker image prune -a
```

## Instruções para a IA

Quando o usuário pedir para adicionar um novo projeto à VPS:

1. No projeto local:
   - Adicionar `output: "standalone"` no next.config
   - Criar Dockerfile, .dockerignore e GitHub Actions workflow
   - O nome da imagem segue o padrão: `ghcr.io/laharlll/NOME-DO-REPO:latest`

2. Na VPS (via SSH para root@31.97.139.118):
   - Criar pasta em `/home/deploy/apps/NOME-DO-PROJETO/`
   - Criar docker-compose.yml com a imagem correta
   - Editar Caddyfile em `/home/deploy/infra/proxy/Caddyfile` adicionando o novo domínio
   - Recarregar Caddy: `docker compose exec caddy caddy reload --config /etc/caddy/Caddyfile`
   - Pull e start: `docker compose pull && docker compose up -d`

3. Padrão de domínio para previews: `NOME-DO-PROJETO.kyvura.com`
   - O DNS já deve estar apontando para 31.97.139.118 antes do deploy
   - Caddy gera certificado HTTPS automaticamente via Let's Encrypt
