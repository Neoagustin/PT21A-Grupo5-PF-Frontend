"use client";

import AdminTableBody from "@/components/AdminComponents/AdminTable/AdminTable";
import MenuAdmin from "@/components/AdminComponents/MenuAdmin/MenuAdmin";
import SearchPaginationAdmin from "@/components/AdminComponents/SearchPaginationAdmin/SearchPaginationAdmin";
import { useAdminContext } from "@/context/AdminContext/AdminContext";
import React from "react";

const Admin: React.FC = () => {
  const { title } = useAdminContext();

  return (
    <main
      className="relative mx-auto bg-gray-50 min-h-screen p-3 pt-[70px] text-blackPage 
          sm:px-5 sm:max-w-[700px]
          md:max-w-[840px]
          xl:max-w-[1024px]"
    >
      <MenuAdmin />

      <h1 className="text-center text-[24px] mb-4 sm:text-[32px]">{title}</h1>

      <SearchPaginationAdmin />

      <AdminTableBody />
    </main>
  );
};

export default Admin;
