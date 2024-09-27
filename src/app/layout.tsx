'use client'

import "./globals.css";
// import { Inter } from "next/font/google"; //usar fonts do next gera um erro ao criar o eecutavel (se precisar mudar a fonte no futuro pesquise)

import { ProviderScene } from "@/contexts/context-scene";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ProviderScene>
          {children}
        </ProviderScene>
      </body>
    </html>
  );
}
