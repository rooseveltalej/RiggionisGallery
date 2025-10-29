import React, { useEffect, useState } from "react";
import type { AvatarProps } from "./Avatar.interface";
import "./Avatar.css";

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  size = "var(--avatar-size-lg)",
  fallbackSrc = "/icons/fallback-avatar.png",
  className = "",
  style,
  ...rest
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  const mergedStyle: React.CSSProperties = {
    ...style,
    width: size,
    height: size,
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`avatar ${className}`.trim()}
      style={mergedStyle}
      onError={() => setCurrentSrc(fallbackSrc)}
      loading="lazy"
      {...rest}
    />
  );
};

export default Avatar;
