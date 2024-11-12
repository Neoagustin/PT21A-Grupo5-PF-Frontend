import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/FooterComponents/Footer/Footer";
import Header from "@/components/HeaderComponents/Header/Header";
import { TokenProvider } from "@/context/TokenContext/TokenContext";

export const metadata: Metadata = {
  icons: "/assets/icons/logo.png",
  title: "Rompiendo Barreras",
  description: "Plataforma de cursos de idiomas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <TokenProvider>
          <Header />
          {children}
          <Footer />
        </TokenProvider>
      </body>
    </html>
  );
}
