import { combineClasses, validateHeadingContent } from "../shared";
import { H1_BASE_CLASS } from "./constants";

export const combineH1Classes = (additionalClassName?: string): string => {
  return combineClasses(H1_BASE_CLASS, additionalClassName);
};

export const validateH1Content = validateHeadingContent;
