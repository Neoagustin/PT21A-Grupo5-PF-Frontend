// hooks/useModal.ts
import { useState } from "react";

const useMessageModal = () => {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [content, setContent] = useState<string | null>(null);

  const handleOpenModal = (id: string) => {
    setContent(id);
    setIsMessageModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsMessageModalOpen(false);
    setContent(null);
  };

  return { isMessageModalOpen, content, handleOpenModal, handleCloseModal };
};

export default useMessageModal;
