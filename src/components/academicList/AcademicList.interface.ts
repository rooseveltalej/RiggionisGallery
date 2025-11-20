export interface AcademicItem {
    title: string;
    institution?: string;
    year?: string | number;
  }
  
  export interface AcademicListProps {
    title?: string;
    items?: AcademicItem[];
  }
  