import React, { type FC } from "react";
import type { IconWrapperProps } from "./IconWrapper.interface";
import Image from "../Image/Image";

const IconWrapper: FC<IconWrapperProps> = ({ 
  icon,
  size = "24px",
  color = "currentColor",
  className = "",
  ...props 
}) => {
  if (typeof icon === 'string') {
    const imageStyle: React.CSSProperties = {
      width: size,
      height: size,
    };

    if (color === '#ffffff' || color === 'white' || color === '#fff') {
      imageStyle.filter = 'brightness(0) invert(1)';
    }

    return (
      <Image
        src={icon}
        alt="icon"
        style={imageStyle}
        className={className}
      />
    );
  }

  const Icon = icon;
  const style: React.CSSProperties = {
    width: size,
    height: size,
    color,
  };

  return (
    <Icon 
      style={style} 
      className={className}
      {...props}
    />
  );
};

export default IconWrapper;