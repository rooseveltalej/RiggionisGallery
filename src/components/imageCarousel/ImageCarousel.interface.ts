export interface ImageCarouselProps {
  images: string[];
  title: string;
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}
