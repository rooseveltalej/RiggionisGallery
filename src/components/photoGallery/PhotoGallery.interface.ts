export interface PhotoGalleryProps {
  images: string[];
  title: string;
  onViewMore: () => void;
  onViewImage?: (image: string, index: number) => void;
}
