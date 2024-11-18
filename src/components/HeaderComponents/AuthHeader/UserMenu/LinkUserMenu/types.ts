import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ILinkButtonProps {
  href: string;
  icon: IconDefinition;
  text: string;
  onClick?: () => void;
}

export default ILinkButtonProps;
