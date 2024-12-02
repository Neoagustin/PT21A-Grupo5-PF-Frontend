// hooks/useEditUserModal.ts
import { useState } from "react";
import { IEditModalHookProps } from "./types";

const useEditModal = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState<IEditModalHookProps | null>(null);

  const openEditModal = (data: IEditModalHookProps) => {
    setEditData(data);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditData(null);
  };

  return { isEditModalOpen, editData, openEditModal, closeEditModal };
};

export default useEditModal;
