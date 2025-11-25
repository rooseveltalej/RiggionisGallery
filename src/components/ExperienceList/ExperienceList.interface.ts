export interface Experience {
  heading: string;
  years?: string;
  description?: string;
}

export interface ExperienceListProps {
  title?: string;
  items?: Experience[];
}
