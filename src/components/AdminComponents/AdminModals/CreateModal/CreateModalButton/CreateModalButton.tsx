import { useAdminContext } from "@/context/AdminContext/AdminContext";
import { useCreateModalContext } from "@/context/Modals/CreateModalContext";
import React from "react";

const CreateModalButton = () => {
  const { openCreateModal } = useCreateModalContext();
  const { title } = useAdminContext();

  return (
    <div className="w-full flex justify-end mt-8">
      <button
        onClick={openCreateModal}
        className="text-whitePage font-bold text-[15px] bg-green  py-2 px-4 transition 200 
    hover:bg-greenHover
    sm:text-[16px] "
      >
        Añadir {title}
      </button>
    </div>
  );
};

export default CreateModalButton;
