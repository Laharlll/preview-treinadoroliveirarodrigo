"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rafael Costa",
    initials: "RC",
    rating: 5,
    text: "Em 12 semanas consegui resultados que não tive em 2 anos treinando sozinho. O Rodrigo entende exatamente o que cada pessoa precisa e adapta tudo à sua realidade.",
  },
  {
    name: "Juliana Mendes",
    initials: "JM",
    rating: 5,
    text: "Eu tinha medo de treinar pesado por conta de uma lesão antiga. O Rodrigo montou um treino seguro e progressivo. Hoje treino sem dor e com muito mais confiança!",
  },
  {
    name: "Pedro Almeida",
    initials: "PA",
    rating: 5,
    text: "O suporte por WhatsApp faz toda a diferença. Sempre que tenho dúvida, ele responde rápido e com muita atenção. Melhor investimento que fiz na minha saúde.",
  },
  {
    name: "Camila Ferreira",
    initials: "CF",
    rating: 5,
    text: "Trabalho o dia inteiro e achava que não ia conseguir manter uma rotina de treino. O Rodrigo adaptou tudo ao meu tempo e hoje treino 4x por semana sem estresse.",
  },
  {
    name: "Thiago Santos",
    initials: "TS",
    rating: 5,
    text: "O diferencial é a base científica. Não é treino genérico de internet, é um plano pensado pra mim. Ganhei 5kg de massa magra em 4 meses.",
  },
  {
    name: "Beatriz Lima",
    initials: "BL",
    rating: 5,
    text: "Comecei do zero, sem nenhuma experiência na academia. O Rodrigo me guiou em cada passo. Hoje me sinto outra pessoa, tanto fisicamente quanto mentalmente.",
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            Depoimentos
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            O Que Nossos Alunos <span className="text-primary">Dizem</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Histórias reais de pessoas que transformaram seus corpos e suas
            vidas com a consultoria online.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <Avatar className="h-10 w-10 border border-border">
                  <AvatarFallback className="bg-primary/10 text-sm font-semibold text-primary">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
