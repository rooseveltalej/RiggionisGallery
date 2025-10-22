import React, {useEffect} from 'react';
import type { ImageProps } from './Image.interface'; ;

const Image: React.FC<ImageProps> = ({ src, alt, className, style, onError, ...rest }) => {
  const [imgSrc, setImgSrc] = React.useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      style={style}
      loading='lazy'
      onError={() => {setImgSrc('/icons/fallback.png');}}
      {...rest}
    />
  );
};
export default Image;
