import React from "react";
import useSegment from "@/hooks/useSegment";
import CreateModalButton from "../AdminModals/CreateModal/CreateModalButton/CreateModalButton";
import CreateModal from "../AdminModals/CreateModal/CreateModal";
import { useCreateModalContext } from "@/context/Modals/CreateModalContext";
import { getAdminTableComponent } from "./utils"; //todo -> Renderización condicional

const AdminTableBody = () => {
  const { segment } = useSegment();
  const { isCreateModalOpen, closeCreateModal } = useCreateModalContext();

  //? EN UTILS SE ENCUENTRA LA RENDERIZACIÓN CONDICIONAL DE TABLAS

  return (
    <>
      <div className="overflow-auto mt-6 h-max shadow-[4px_4px_12px_rgba(0,0,0,0.2)]">
        {getAdminTableComponent(segment)}
      </div>

      {isCreateModalOpen && <CreateModal closeCreateModal={closeCreateModal} />}

      {segment !== "students" && <CreateModalButton />}
    </>
  );
};

export default AdminTableBody;
