// hooks/useEditUserModal.ts
import { IUser } from "@/interfaces/IUser";
import { useState } from "react";

const useEditUserModal = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editUser, setEditUser] = useState<IUser | null>(null);

  const openEditUserModal = (user: IUser) => {
    setEditUser(user);
    setIsEditModalOpen(true);
  };

  const closeEditUserModal = () => {
    setIsEditModalOpen(false);
    setEditUser(null);
  };

  return { isEditModalOpen, editUser, openEditUserModal, closeEditUserModal };
};

export default useEditUserModal;
