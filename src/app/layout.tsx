import type { Metadata } from "next";
// import { Inter } from "next/font/google"; //usar fonts do next gera um erro ao criar o eecutavel (se precisar mudar a fonte no futuro pesquise)
import "./globals.css";

export const metadata: Metadata = {
  title: "VN",
  description: "VN next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
