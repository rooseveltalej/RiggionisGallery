import React from "react";
import type { H1Props } from "./types";
import { combineH1Classes, validateH1Content } from "./utils";
import { filterValidHeadingProps } from "../shared";
import "./H1.css";

export const H1: React.FC<H1Props> = ({
  children,
  className,
  id,
  ...restProps
}) => {
  if (!validateH1Content(children)) {
    return null;
  }

  const combinedClassName = combineH1Classes(className);
  const validProps = filterValidHeadingProps(restProps);

  return (
    <h1 className={combinedClassName} id={id} {...validProps}>
      {children}
    </h1>
  );
};
H1.displayName = "H1";
