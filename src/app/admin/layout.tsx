// app/admin/layout.tsx (Layout para Admin)
import { AdminMenuProvider } from "@/context/AdminMenuContext/AdminMenuContext";
import { AdminProvider } from "@/context/AdminContext/AdminContext";
import { UserAdminProvider } from "@/context/Admin/UserAdminContext/UserAdminContext";
import { Metadata } from "next";
import { LanguageAdminProvider } from "@/context/Admin/LanguageAdminContext/LanguageAdminContext";

export const metadata: Metadata = {
  title: "Admin - Rompiendo Barreras",
  description: "Área administrativa de la plataforma.",
};

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AdminMenuProvider>
      <AdminProvider>
        <UserAdminProvider>
          <LanguageAdminProvider>{children}</LanguageAdminProvider>
        </UserAdminProvider>
      </AdminProvider>
    </AdminMenuProvider>
  );
}
