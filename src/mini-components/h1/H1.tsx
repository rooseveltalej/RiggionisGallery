import React from "react";
import type { H1Props } from "./types";
import { combineH1Classes, validateH1Content } from "./utils";
import "./H1.css";

export const H1: React.FC<H1Props> = ({
  children,
  className,
  id,
  ...restProps
}) => {
  const validatedChildren = validateH1Content(children);
  const combinedClassName = combineH1Classes(className);

  return (
    <h1 className={combinedClassName} id={id} {...restProps}>
      {validatedChildren}
    </h1>
  );
};
H1.displayName = "H1";
