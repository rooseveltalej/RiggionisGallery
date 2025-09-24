import React from "react";
import type { H2Props } from "./types";
import { combineH2Classes, validateH2Content } from "./utils";
import { filterValidHeadingProps } from "../shared";
import "./H2.css";

export const H2: React.FC<H2Props> = ({
  children,
  className,
  id,
  ...restProps
}) => {
  const validatedChildren = validateH2Content(children);
  const combinedClassName = combineH2Classes(className);
  const validProps = filterValidHeadingProps(restProps);

  return (
    <h2 className={combinedClassName} id={id} {...validProps}>
      {validatedChildren}
    </h2>
  );
};

H2.displayName = "H2";
