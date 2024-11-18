import React from "react";
import useModal from "@/hooks/useModal";
import UserIdModal from "./UserIdModal/UserIdModal";
import AdminUsersTable from "./AdminUsersTable/AdminUsersTable";
import AdminLanguagesTable from "./AdminLanguagesTable/AdminLanguagesTable";
import useSegment from "@/hooks/useSegment";

const AdminTableBody = () => {
  const { segment } = useSegment();
  const { isModalOpen, selectedId, handleCloseModal } = useModal();

  return (
    <div className="overflow-auto mt-6 h-max">
      {segment === "students" || segment === "teachers" ? (
        <AdminUsersTable />
      ) : (
        <AdminLanguagesTable />
      )}

      <UserIdModal
        isModalOpen={isModalOpen}
        selectedId={selectedId}
        closeModal={handleCloseModal}
      />
    </div>
  );
};

export default AdminTableBody;
