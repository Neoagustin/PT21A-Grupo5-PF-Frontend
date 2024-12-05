// app/dashboard/layout.tsx (Layout para Dashboard)
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfil - Rompiendo Barreras",
  description: "Perfil del usuario.",
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main className="min-h-[calc(100vh-210px)] flex justify-center items-center">{children}</main>;
}
