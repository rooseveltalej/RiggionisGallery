import type { ImgHTMLAttributes } from "react";

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;         
  alt?: string;            
  size?: number | string;   
  fallbackSrc?: string;      
}
