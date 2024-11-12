

import { StaticImageData } from "next/image";

interface ICardCourseProps {
  img: string | StaticImageData;
  title: string;
  description?: string;
}

export default ICardCourseProps;


