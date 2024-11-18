import ICourse from "./ICourseCard";

export interface ILanguage {
  id: string;
  path: string;
  name: string;
  image_url: string;
  flag_url: string;
  country_photo_url: string;
  brief_description: string;
  general_description: string;
  courses: ICourse[];
}

export default ILanguage;
