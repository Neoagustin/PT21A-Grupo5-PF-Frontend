import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/HeaderComponents/Header";

export const metadata: Metadata = {
  title: "Rompiendo Barreras",
  description: "Plataforma de cursos de idiomas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
