import ICourse from "./ICourseCard";

export interface ILanguage {
  id: string;
  name: string;
  image_url: string;
  flag_url: string;
  country_photo_url: string;
  brief_description: string;
  general_description: string;
  path: string;
  courses: ICourse[];
}

export default ILanguage;