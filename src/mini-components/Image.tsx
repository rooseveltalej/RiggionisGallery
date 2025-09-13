import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className, style, ...rest }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...rest}
    />
  );
};
export default Image;
