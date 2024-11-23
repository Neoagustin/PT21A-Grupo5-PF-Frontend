import React from "react";
import IUserIdModalProps from "./types";

const UserIdModal: React.FC<IUserIdModalProps> = ({ isModalOpen, selectedId, closeModal }) => {
  if (!isModalOpen || !selectedId) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-6 rounded-lg max-w-[90%]" onClick={(e) => e.stopPropagation()}>
        <h2 className="flex flex-col gap-3 text-lg">
          <span className="font-bold select-none">User ID:</span>
          <span>{selectedId}</span>
        </h2>
        <button
          className="mt-4 text-white bg-skyblue py-2 px-4 rounded select-none hover:bg-skyblueHover transition-colors duration-200"
          onClick={closeModal}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default UserIdModal;
