import React, { type FC } from "react";
import type { IconWrapperProps } from "./IconWrapper.interface";
import styles from "./IconWrapper.module.css";

const IconWrapper: FC<IconWrapperProps> = ({
  icon: Icon,
  size = "24px",
  color = "currentColor",
  className = "",
  ...props
}) => {
  const style: React.CSSProperties = {
    width: size,
    height: size,
    color,
  };

  return (
    <Icon
      className={`${styles.icon} icon-wrapper ${className}`.trim()}
      style={style}
      {...props}
    />
  );
};

export default IconWrapper;
