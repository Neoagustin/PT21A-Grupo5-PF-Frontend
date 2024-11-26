import React from "react";
import AdminUsersTable from "./AdminTables/AdminUsersTable/AdminUsersTable";
import AdminLanguagesTable from "./AdminTables/AdminLanguagesTable/AdminLanguagesTable";
import AdminCoursesTable from "./AdminTables/AdminCoursesTable/AdminCoursesTable";
import useSegment from "@/hooks/useSegment";
import CreateModalButton from "../AdminModals/CreateModal/CreateModalButton/CreateModalButton";
import CreateModal from "../AdminModals/CreateModal/CreateModal";
import { useCreateModalContext } from "@/context/Modals/CreateModalContext";
import AdminLessonsTable from "./AdminTables/AdminLessonTable/AdminLessonTable";

const AdminTableBody = () => {
  const { segment } = useSegment();

  const { isCreateModalOpen, closeCreateModal } = useCreateModalContext();
  return (
    <>
      <div className="overflow-auto mt-6 h-max shadow-[4px_4px_12px_rgba(0,0,0,0.2)]">
        {segment === "students" || segment === "teachers" ? (
          <AdminUsersTable />
        ) : segment === "languages" ? (
          <AdminLanguagesTable />
        ) : segment === "courses" ? (
          <AdminCoursesTable />
        ) : (
          <AdminLessonsTable />
        )}
      </div>

      {isCreateModalOpen && <CreateModal closeCreateModal={closeCreateModal} />}

      <CreateModalButton />
    </>
  );
};

export default AdminTableBody;
