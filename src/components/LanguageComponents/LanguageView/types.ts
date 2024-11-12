

export interface ILanguage {
    id: string;
    name: string;
    image_url: string;
    flag_url: string;
    country_photo_url: string;
    description: string;
    courses: ICourse[]; // Array de objetos `Course`
  }


  export interface ICourse {
    id: string;
    title: string;
    img_url: string;
    video_url: string | null;
    specialization: string;
    level: string;
    createdAt: string; // Puede ser `Date` si lo quieres como tipo `Date`
    description?: string
  }