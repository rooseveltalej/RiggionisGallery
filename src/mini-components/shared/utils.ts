export const combineClasses = (
  baseClass: string,
  additionalClassName?: string
): string => {
  if (!additionalClassName) {
    return baseClass;
  }

  return `${baseClass} ${additionalClassName}`;
};

export const validateHeadingContent = (children: React.ReactNode): boolean => {
  if (children === null || children === undefined) {
    return false;
  }

  if (typeof children === "string" && children.trim() === "") {
    return false;
  }

  return true;
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
