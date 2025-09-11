import { H1_BASE_CLASS } from "./constants";

export const combineH1Classes = (additionalClassName?: string): string => {
  if (!additionalClassName) {
    return H1_BASE_CLASS;
  }

  return `${H1_BASE_CLASS} ${additionalClassName}`;
};

export const validateH1Content = (children: React.ReactNode): boolean => {
  if (children === null || children === undefined) {
    return false;
  }

  if (typeof children === "string" && children.trim() === "") {
    return false;
  }

  return true;
};
