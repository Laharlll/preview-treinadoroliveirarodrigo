"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ChevronDown } from "lucide-react";
import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/message/GK5PKFMETDUGB1";

const stats = [
  { value: "1.600+", label: "Seguidores" },
  { value: "12", label: "Semanas p/ Resultado" },
  { value: "100%", label: "Online" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <Image
        src="/images/hero-bg.jpg"
        alt="Academia"
        fill
        className="object-cover"
        priority
        quality={80}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-6 border-primary/50 px-4 py-1.5 text-primary">
            🔥 Vagas Limitadas
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
        >
          Transforme Seu Corpo com{" "}
          <span className="text-primary">Treino Personalizado</span> e
          Acompanhamento Profissional
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          Resultados reais em 12 semanas com método, segurança e constância.
          Consultoria 100% online com o Fisiologista do Exercício Rodrigo
          Oliveira.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="gap-2 bg-primary px-8 text-lg font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Quero Começar Agora
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border px-8 text-lg hover:bg-accent"
          >
            <a href="#sobre">Saiba Mais</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <a
            href="#sobre"
            className="inline-flex animate-bounce text-muted-foreground transition-colors hover:text-primary"
          >
            <ChevronDown className="h-8 w-8" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
