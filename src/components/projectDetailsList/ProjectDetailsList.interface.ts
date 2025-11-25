export interface ProjectDetailsListProps {
  title: string;
  technique?: string;
  support?: string;
  style?: string;
  author: string;
  year: string;
  dimensions: string;
  price: string;
  description: string;
  labels?: {
    title?: string;
    technique?: string;
    support?: string;
    style?: string;
    author?: string;
    year?: string;
    dimensions?: string;
    price?: string;
    description?: string;
  };
  placeholders?: {
    notAvailable?: string;
  };
}
