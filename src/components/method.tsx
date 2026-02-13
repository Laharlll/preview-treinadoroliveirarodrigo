"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ClipboardList, Dumbbell, Headphones, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Anamnese",
    description:
      "Avaliação diagnóstica completa do seu perfil, histórico e objetivos para criar a base do seu plano.",
    step: "01",
  },
  {
    icon: Dumbbell,
    title: "Treino Personalizado",
    description:
      "Plano 100% adaptado ao seu objetivo, rotina, nível e limitações. Entregue por aplicativo.",
    step: "02",
  },
  {
    icon: Headphones,
    title: "Acompanhamento",
    description:
      "Suporte contínuo por WhatsApp com ajustes mensais. Todo mês um treino novo.",
    step: "03",
  },
  {
    icon: TrendingUp,
    title: "Resultados",
    description:
      "Evolução real, com segurança e constância. Resultados visíveis em 12 semanas.",
    step: "04",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Method() {
  return (
    <section id="metodo" className="bg-card/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            Metodologia
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Como Funciona a <span className="text-primary">Consultoria</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Um processo simples e eficiente para você alcançar seus objetivos
            com acompanhamento profissional do início ao fim.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step) => (
            <motion.div
              key={step.step}
              variants={itemVariants}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <span className="absolute -top-3 right-4 text-5xl font-black text-primary/10">
                {step.step}
              </span>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
