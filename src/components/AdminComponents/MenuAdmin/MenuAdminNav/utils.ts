import {
  faArrowRightFromBracket,
  faBookAtlas,
  faShareAlt,
  faSliders,
  faUserGraduate,
  faUserTie,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export type MenuItem = {
  text: string;
  href: string;
  icon: IconDefinition;
  isSelected?: boolean;
};

const menuItems: MenuItem[] = [
  {
    text: "Panel",
    href: "/admin/panel",
    icon: faSliders,
  },
  {
    text: "Alumnos",
    href: "/admin/students",
    icon: faUserGraduate,
  },
  {
    text: "Profesores",
    href: "/admin/teachers",
    icon: faUserTie,
  },
  {
    text: "Lenguajes",
    href: "/admin/languages",
    icon: faBookAtlas,
  },
  {
    text: "Códigos de Referido",
    href: "/admin/referrals",
    icon: faShareAlt,
  },
  {
    text: "Salir del admin",
    href: "/",
    icon: faArrowRightFromBracket,
    isSelected: false,
  },
];

export default menuItems;
