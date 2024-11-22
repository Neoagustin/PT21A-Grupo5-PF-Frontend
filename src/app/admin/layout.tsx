// app/admin/layout.tsx (Layout para Admin)
import { AdminMenuProvider } from "@/context/AdminMenuContext/AdminMenuContext";
import { AdminProvider } from "@/context/AdminContext/AdminContext";
import { UserAdminProvider } from "@/context/Admin/UserAdminContext/UserAdminContext";
import { Metadata } from "next";
import { LanguageAdminProvider } from "@/context/Admin/LanguageAdminContext/LanguageAdminContext";
import { CoursesAdminProvider } from "@/context/Admin/CoursesAdminContext/CoursesAdminContext";

export const metadata: Metadata = {
  title: "Admin - Rompiendo Barreras",
  description: "Área administrativa de la plataforma.",
};

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AdminMenuProvider>
      <AdminProvider>
        <UserAdminProvider>
          <LanguageAdminProvider>
            <CoursesAdminProvider>{children}</CoursesAdminProvider>
          </LanguageAdminProvider>
        </UserAdminProvider>
      </AdminProvider>
    </AdminMenuProvider>
  );
}
