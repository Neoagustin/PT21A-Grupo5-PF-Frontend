import React from "react";
import IMessageModalProps from "./types";

const MessageModal: React.FC<IMessageModalProps> = ({
  isMessageModalOpen,
  content,
  closeModal,
  title,
}) => {
  if (!isMessageModalOpen || !content) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-3 "
      onClick={handleOverlayClick}
    >
      <div
        className="
        bg-white p-6 rounded-lg max-w-[90%] max-h-[90vh]
        sm:max-w-[400px]
        "
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="flex flex-col gap-3 text-lg">
          <span className="font-bold select-none">{title}</span>
        </h2>

        <div className="overflow-auto max-h-[45vh] my-4 ">
          <span>{content}</span>
        </div>

        <div className="h-[max-content]">
          <button
            className="mt-4 text-white bg-skyblue py-2 px-4  rounded select-none hover:bg-skyblueHover transition-colors duration-200"
            onClick={closeModal}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
