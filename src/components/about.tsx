"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Award } from "lucide-react";
import Image from "next/image";

const credentials = [
  { icon: GraduationCap, label: "Fisiologista do Exercício" },
  { icon: Award, label: "Coach Certificado" },
  { icon: Users, label: "Centenas de Alunos" },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl lg:mx-0"
          >
            <Image
              src="/images/coach.jpg"
              alt="Coach Rodrigo Oliveira"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              Sobre o Coach
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Quem é o{" "}
              <span className="text-primary">Rodrigo Oliveira</span>?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Fisiologista do Exercício e Coach especializado em consultoria de
              treino online personalizada. Com base científica e anos de
              experiência, ajudo pessoas a transformarem seus corpos com
              segurança, método e constância.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Minha missão é provar que ir pra academia é muito mais sobre
              constância do que altas cargas. Procuro pessoas que queiram mudar o
              corpo, a saúde e a disciplina, mesmo com pouco tempo na rotina.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2"
                >
                  <cred.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{cred.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
