import { combineClasses, validateHeadingContent } from "../shared";
import { H2_BASE_CLASS } from "./constants";

export const combineH2Classes = (additionalClassName?: string): string => {
  return combineClasses(H2_BASE_CLASS, additionalClassName);
};

export const validateH2Content = validateHeadingContent;
