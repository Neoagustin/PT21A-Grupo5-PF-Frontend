import { TokenProvider } from "@/context/TokenContext/TokenContext";
import { UserProvider } from "@/context/UserContext/UserContext";
import { UserMenuProvider } from "@/context/UserMenuContext/UserMenuContext";
import Header from "@/components/HeaderComponents/Header/Header";
import Footer from "@/components/FooterComponents/Footer/Footer";
import type { Metadata } from "next";
import "./globals.css";

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
          <UserProvider>
            <UserMenuProvider>
              <Header />
              {children}
              <Footer />
            </UserMenuProvider>
          </UserProvider>
        </TokenProvider>
      </body>
    </html>
  );
}
