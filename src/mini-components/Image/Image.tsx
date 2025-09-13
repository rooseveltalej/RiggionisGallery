import React from 'react';
import type { ImageProps } from './Image.interface';

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
