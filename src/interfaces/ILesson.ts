export interface IUpdateLesson {
  title?: string;
  content?: string;
  course?: string;
  video: File | string | null;
}

export interface ICreateLesson {
  title: string;
  content: string;
  course: string;
  video: File | string | null;
}

export interface ILesson {
  id: string;
  title: string;
  content: string;
  video: string | null;
}
