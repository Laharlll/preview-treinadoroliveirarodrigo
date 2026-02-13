"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a consultoria online?",
    answer:
      "Após a contratação, você preenche uma anamnese completa (avaliação diagnóstica). Com base nas suas informações, monto um treino 100% personalizado que é entregue por aplicativo. Você recebe suporte contínuo por WhatsApp e todo mês seu treino é atualizado.",
  },
  {
    question: "Preciso ter experiência na academia?",
    answer:
      "Não! A consultoria é adaptada para todos os níveis, desde iniciantes até avançados. Se você nunca pisou numa academia, eu te guio em cada exercício com vídeos demonstrativos e orientações detalhadas.",
  },
  {
    question: "Como recebo meu treino?",
    answer:
      "Seu treino é entregue por um aplicativo de treino profissional, direto no seu celular. Lá você encontra todos os exercícios com vídeos, séries, repetições e descanso. É super intuitivo e fácil de usar.",
  },
  {
    question: "Com que frequência o treino é atualizado?",
    answer:
      "Todo mês você recebe um treino novo! A periodização mensal é essencial para manter seu corpo evoluindo e evitar platôs. Os ajustes são feitos com base no seu feedback e evolução.",
  },
  {
    question: "O suporte por WhatsApp funciona como?",
    answer:
      "Você tem acesso direto a mim pelo WhatsApp para tirar dúvidas sobre exercícios, ajustes no treino, orientações gerais e acompanhamento. Respondo de forma rápida e personalizada.",
  },
  {
    question: "Quanto tempo para ver resultados?",
    answer:
      "Com constância e dedicação, os primeiros resultados visíveis aparecem entre 8 a 12 semanas. Mas melhorias na disposição, força e bem-estar você sente já nas primeiras semanas!",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-card/50 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            FAQ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Tire suas dúvidas sobre a consultoria de treino online.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
