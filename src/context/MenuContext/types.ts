export interface IMenuContextProps {
    menu: boolean;
    menuRef: React.RefObject<HTMLDivElement>;
    handleToggleMenu: () => void;
    handleCloseMenu: () => void;
};