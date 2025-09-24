import clsx from "clsx";

export const combineClasses = (
  baseClass: string,
  additionalClassName?: string
): string => {
  return clsx(baseClass, additionalClassName);
};

export const validateHeadingContent = (
  children: React.ReactNode,
  fallback = "Tittle"
): React.ReactNode => {
  if (children === null || children === undefined) return fallback;
  if (typeof children === "string" && children.trim() === "") return fallback;
  return children;
};
