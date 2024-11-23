import React from "react";
import AdminUsersTable from "./AdminTables/AdminUsersTable/AdminUsersTable";
import AdminLanguagesTable from "./AdminTables/AdminLanguagesTable/AdminLanguagesTable";
import AdminCoursesTable from "./AdminTables/AdminCoursesTable/AdminCoursesTable";
import useSegment from "@/hooks/useSegment";

const AdminTableBody = () => {
  const { segment } = useSegment();

  return (
    <>
      <div className="overflow-auto mt-6 h-max shadow-[4px_4px_12px_rgba(0,0,0,0.2)]">
        {segment === "students" || segment === "teachers" ? (
          <AdminUsersTable />
        ) : segment === "languages" ? (
          <AdminLanguagesTable />
        ) : (
          <AdminCoursesTable />
        )}
      </div>

      <div className="w-full flex justify-end mt-8">
        <button className="text-whitePage text-[14px] bg-green  py-2 px-4 transition 200 hover:bg-greenHover ">
          Añadir usuario
        </button>
      </div>
    </>
  );
};

export default AdminTableBody;
