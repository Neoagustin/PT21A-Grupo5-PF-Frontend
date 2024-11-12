export interface ICourse {
  id: string;
  title: string;
  img_url: string;
  video_url: string | null;
  specialization: string;
  description?: string;
  level: string;
  createdAt: string;
}

export default ICourse;
