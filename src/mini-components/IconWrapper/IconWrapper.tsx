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
    return (
      <Image
        src={icon}
        alt="icon"
        style={{ width: size, height: size }}
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