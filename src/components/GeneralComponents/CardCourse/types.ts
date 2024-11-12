

import { StaticImageData } from "next/image";

interface ICardCourseProps {
  img: string | StaticImageData;
  title: string;
  description?: string;
}

export default ICardCourseProps;

// import ILanguage from "@/interfaces/ILanguage";

// interface ICardCourseProps {
//   language: ILanguage;
// }

// export default ICardCourseProps;

