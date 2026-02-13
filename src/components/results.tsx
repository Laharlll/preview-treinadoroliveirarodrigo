"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const transformations = [
  { name: "Carlos M.", period: "12 semanas", description: "Perda de gordura e ganho de definição muscular" },
  { name: "Ana P.", period: "8 semanas", description: "Fortalecimento e melhora na postura" },
  { name: "Lucas R.", period: "16 semanas", description: "Ganho de massa muscular e condicionamento" },
  { name: "Mariana S.", period: "12 semanas", description: "Emagrecimento saudável com manutenção de massa magra" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Results() {
  return (
    <section id="resultados" className="bg-card/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            Transformações
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Resultados Que <span className="text-primary">Falam Por Si</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Não adie a transformação que seu corpo merece.{" "}
            <span className="font-semibold text-primary">A hora é agora!</span>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2"
        >
          {transformations.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="flex h-64 items-center justify-center gap-4 bg-muted/50 sm:h-72">
                <div className="flex h-full flex-1 flex-col items-center justify-center border-r border-border bg-muted/30">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
                    <span className="text-3xl font-bold text-muted-foreground/50">A</span>
                  </div>
                  <span className="mt-3 text-sm font-medium text-muted-foreground">Antes</span>
                </div>
                <div className="flex h-full flex-1 flex-col items-center justify-center bg-primary/5">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-3xl font-bold text-primary">D</span>
                  </div>
                  <span className="mt-3 text-sm font-medium text-primary">Depois</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{item.name}</h3>
                  <Badge variant="outline" className="border-primary/30 text-xs text-primary">
                    {item.period}
                  </Badge>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center text-lg italic text-muted-foreground"
        >
          &ldquo;Ir pra academia é muito mais sobre{" "}
          <span className="font-semibold text-foreground">constância</span> do
          que altas cargas.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
