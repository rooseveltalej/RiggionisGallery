import clsx from "clsx";

export const combineClasses = (
  baseClass: string,
  additionalClassName?: string
): string => {
  return clsx(baseClass, additionalClassName);
};

export const validateHeadingContent = (children: React.ReactNode, fallback = "Título"): React.ReactNode => {
  if (children === null || children === undefined) return fallback;
  if (typeof children === "string" && children.trim() === "") return fallback;
  return children;
};

export const filterValidHeadingProps = (
  props: Record<string, unknown>
): Record<string, unknown> => {
  return Object.fromEntries(
    Object.entries(props).filter(
      ([key]) =>
        key.startsWith("data-") ||
        key.startsWith("aria-") ||
        ["role", "tabIndex", "title"].includes(key)
    )
  );
};
