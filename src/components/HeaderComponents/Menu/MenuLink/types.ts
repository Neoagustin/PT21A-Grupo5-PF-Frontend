export interface IMenuLinkProps {
    menu: boolean;
    menuRef: React.RefObject<HTMLDivElement>;
    handleCloseMenu: () => void;
};