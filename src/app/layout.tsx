import { TokenProvider } from "@/context/TokenContext/TokenContext";
import { UserProvider } from "@/context/UserContext/UserContext";
import { UserMenuProvider } from "@/context/UserMenuContext/UserMenuContext";
import { MenuProvider } from "@/context/MenuContext/MenuContext";
import Header from "@/components/HeaderComponents/Header/Header";
import Footer from "@/components/FooterComponents/Footer/Footer";
import type { Metadata } from "next";
import "./globals.css";
import { CourseProvider } from "@/context/CourseContext/CourseContext";
import ChatBot from "@/components/ChatBotComponents/ChatBot/ChatBot";

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
            <CourseProvider>
              <UserMenuProvider>
                <MenuProvider>
                  <Header />
                  <main className="py-10 min-h-[calc(100vh-110px)] sm:min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-130px)]">
                    {children}
                    <ChatBot />
                  </main>
                  <Footer />
                </MenuProvider>
              </UserMenuProvider>
            </CourseProvider>
          </TokenProvider>
        </UserProvider>
      </body>
    </html>
  );
}
