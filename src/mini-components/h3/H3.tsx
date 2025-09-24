import React from "react";
import type { H3Props } from "./types";
import { combineH3Classes, validateH3Content } from "./utils";
import { filterValidHeadingProps } from "../shared";
import "./H3.css";

export const H3: React.FC<H3Props> = ({
  children,
  className,
  id,
  ...restProps
}) => {
  if (!validateH3Content(children)) {
    return null;
  }

  const combinedClassName = combineH3Classes(className);
  const validProps = filterValidHeadingProps(restProps);

  return (
    <h3 className={combinedClassName} id={id} {...validProps}>
      {children}
    </h3>
  );
};

H3.displayName = "H3";
