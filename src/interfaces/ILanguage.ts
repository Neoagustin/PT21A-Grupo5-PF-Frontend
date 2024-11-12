import ICourse from "./ICourseCard";

export interface ILanguage {
  id: string;
  name: string;
  image_url: string;
  flag_url: string;
  country_photo_url: string;
  description: string;
  courses: ICourse[];
}

export default ILanguage;
