import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rompiendo Barreras",
  description: "Plataforma de cursos de idiomas.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (

    <html lang="es">
      <body className='antialiased'>
        {children}
      </body>
    </html>

  );

};