"use client";

import AdminTableBody from "@/components/AdminComponents/AdminTable/AdminTable";
import MenuAdmin from "@/components/AdminComponents/MenuAdmin/MenuAdmin";
import SearchPaginationAdmin from "@/components/AdminComponents/SearchPaginationAdmin/SearchPaginationAdmin";
import { useAdminContext } from "@/context/AdminContext/AdminContext";
import useSegment from "@/hooks/useSegment";
import React from "react";
import AdminPanel from "./AdminPanel/AdminPanel";

const Admin: React.FC = () => {
  const { title } = useAdminContext();
  const { segment } = useSegment();

  return (
    <main
      className="relative mx-auto bg-gray-50 min-h-screen p-[16px] pt-[70px] text-blackPage 
          sm:px-5 sm:max-w-[700px]
          md:max-w-[840px]
          xl:max-w-[1024px]"
    >
      <MenuAdmin />

      <h1 className="text-center text-[24px] mb-4 sm:text-[32px]">{title}</h1>

      {segment === "panel" ? (
        <AdminPanel />
      ) : segment === "referrals" ? (
        <AdminTableBody />
      ) : (
        <>
          <SearchPaginationAdmin />
          <AdminTableBody />
        </>
      )}
    </main>
  );
};

export default Admin;
