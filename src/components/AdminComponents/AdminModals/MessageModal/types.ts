interface IMessageModalProps {
  title: string;
  isMessageModalOpen: boolean;
  content: string | null;
  closeModal: () => void;
}

export default IMessageModalProps;
