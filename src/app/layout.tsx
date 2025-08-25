import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppShell from '@/components/AppShell';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Relatório Comparativo: Plataformas Big Data em Nuvem",
  description:
    "Análise abrangente de Google Cloud Platform, Microsoft Azure e Amazon Web Services para tomada de decisão estratégica em projetos de Big Data.",
  keywords:
    "big data, cloud computing, GCP, Azure, AWS, comparativo, analytics",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
