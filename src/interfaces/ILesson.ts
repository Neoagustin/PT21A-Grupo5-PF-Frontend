export interface IUpdateLesson {
  title?: string;
  content?: string;
  video?: string;
  course?: string;
}

export interface ILesson {
  id: string;
  title: string;
  content: string;
  video_url: string;
}
