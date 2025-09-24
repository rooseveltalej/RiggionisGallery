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
  if (!validateH2Content(children)) {
    return null;
  }

  const combinedClassName = combineH2Classes(className);
  const validProps = filterValidHeadingProps(restProps);

  return (
    <h2 className={combinedClassName} id={id} {...validProps}>
      {children}
    </h2>
  );
};

H2.displayName = "H2";
