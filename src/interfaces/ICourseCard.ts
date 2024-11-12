export interface ICourse {
  id: string;
  title: string;
  img_url: string;
  video_url: string | null;
  specialization: string;
  general_description: string;
  brief_description: string;
  level: string;
  createdAt: string;
}

export default ICourse;