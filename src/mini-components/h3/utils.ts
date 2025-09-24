import { combineClasses, validateHeadingContent } from "../shared";
import { H3_BASE_CLASS } from "./constants";

export const combineH3Classes = (additionalClassName?: string): string => {
  return combineClasses(H3_BASE_CLASS, additionalClassName);
};

export const validateH3Content = validateHeadingContent;
