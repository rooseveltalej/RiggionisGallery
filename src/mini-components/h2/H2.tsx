import React from "react";
import type { H2Props } from "./types";
import { combineH2Classes, validateH2Content } from "./utils";
import "./H2.css";

export const H2: React.FC<H2Props> = ({
  children,
  className,
  id,
  ...restProps
}) => {
  const validatedChildren = validateH2Content(children);
  const combinedClassName = combineH2Classes(className);

  return (
    <h2 className={combinedClassName} id={id} {...restProps}>
      {validatedChildren}
    </h2>
  );
};

H2.displayName = "H2";
