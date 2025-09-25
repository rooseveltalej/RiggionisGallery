import React from "react";
import type { H3Props } from "./types";
import { combineH3Classes, validateH3Content } from "./utils";
import "./H3.css";

export const H3: React.FC<H3Props> = ({
  children,
  className,
  id,
  ...restProps
}) => {
  const validatedChildren = validateH3Content(children);
  const combinedClassName = combineH3Classes(className);

  return (
    <h3 className={combinedClassName} id={id} {...restProps}>
      {validatedChildren}
    </h3>
  );
};

H3.displayName = "H3";
