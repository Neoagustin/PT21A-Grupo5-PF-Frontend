import ICourse from "./ICourse";

export interface IUpdateLanguage {
  name?: string;
  general_description?: string;
  brief_description?: string;
  image_url: File | string | null;
  flag_url: File | string | null;
  country_photo: File | string | null;
}

export interface ICreateLanguage {
  path: string;
  name: string;
  general_description: string;
  brief_description: string;
  image_url: File | null;
  flag_url: File | null;
  country_photo: File | null;
}

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
