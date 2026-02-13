import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rodrigo Oliveira | Consultoria de Treino Online Personalizada",
  description:
    "Transforme seu corpo com treino personalizado e acompanhamento profissional. Resultados reais em 12 semanas com método, segurança e constância.",
  keywords: [
    "personal trainer online",
    "consultoria de treino",
    "treino personalizado",
    "fisiologista do exercício",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
