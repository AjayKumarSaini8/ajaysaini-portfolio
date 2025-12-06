export interface Project {
  category: string;
  title: string;
  description: string;
  link: string;
  image: string;
  techStack: string[];
  github?: string;
  status?: 'completed' | 'in-progress' | 'planned';
  year: number;
}