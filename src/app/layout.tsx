import { TokenProvider } from "@/context/TokenContext/TokenContext";
import { UserProvider } from "@/context/UserContext/UserContext";
import { UserMenuProvider } from "@/context/UserMenuContext/UserMenuContext";
import { MenuProvider } from "@/context/MenuContext/MenuContext";
import Header from "@/components/HeaderComponents/Header/Header";
import Footer from "@/components/FooterComponents/Footer/Footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: "/assets/icons/logo.png",
  title: "Rompiendo Barreras",
  description: "Plataforma de cursos de idiomas.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <UserProvider>
          <TokenProvider>
            <UserMenuProvider>
              <MenuProvider>
                <Header />
                <main className="min-h-[calc(100dvh-110px)] flex justify-center items-center py-10 sm:min-h-[calc(100dvh-120px)] md:min-h-[calc(100dvh-130px)]">
                  {children}
                </main>
                <Footer />
              </MenuProvider>
            </UserMenuProvider>
          </TokenProvider>
        </UserProvider>
      </body>
    </html>
  );
}
