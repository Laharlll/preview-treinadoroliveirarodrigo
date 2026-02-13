"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dumbbell,
  ClipboardList,
  Smartphone,
  BookOpen,
  RefreshCw,
  BarChart3,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/message/GK5PKFMETDUGB1";

const benefits = [
  {
    icon: Dumbbell,
    title: "Treino Personalizado por App",
    description: "Plano de treino 100% adaptado, entregue direto no seu celular via aplicativo.",
  },
  {
    icon: ClipboardList,
    title: "Avaliação Diagnóstica",
    description: "Anamnese completa para entender seu perfil, histórico e objetivos.",
  },
  {
    icon: Smartphone,
    title: "Suporte por WhatsApp",
    description: "Tire dúvidas e receba orientações diretamente pelo WhatsApp.",
  },
  {
    icon: BookOpen,
    title: "E-book Exclusivo",
    description: "Material complementar com dicas de treino, nutrição e estilo de vida.",
  },
  {
    icon: RefreshCw,
    title: "Treino Novo Todo Mês",
    description: "Periodização mensal para manter seu corpo sempre evoluindo.",
  },
  {
    icon: BarChart3,
    title: "Acompanhamento de Evolução",
    description: "Monitoramento contínuo dos seus resultados e ajustes estratégicos.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            Benefícios
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tudo Que Você <span className="text-primary">Recebe</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Uma consultoria completa com tudo que você precisa para transformar
            seu corpo de forma segura e eficiente.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            size="lg"
            className="gap-2 bg-primary px-8 text-lg font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Quero Tudo Isso
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
