interface IUserMenuContextTypes {
  isUserModalOpen: boolean;
  toggleModal: () => void;
  closeMenu: () => void;
  menuRef: React.RefObject<HTMLDivElement>;
}

export default IUserMenuContextTypes;
