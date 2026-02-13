"use client";

import { Instagram, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/message/GK5PKFMETDUGB1";
const INSTAGRAM_URL = "https://instagram.com/treinador_oliveirarodrigo";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Método", href: "#metodo" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Resultados", href: "#resultados" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div>
            <a href="#" className="text-xl font-bold tracking-tight">
              <span className="text-primary">Rodrigo</span> Oliveira
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Consultoria de Treino Online Personalizada
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Rodrigo Oliveira — Consultoria de
            Treino Online. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-xs text-muted-foreground/60">
            Fotos: Unsplash (Kishore Uthamaraj, LOGAN WEAVER)
          </p>
        </div>
      </div>
    </footer>
  );
}
