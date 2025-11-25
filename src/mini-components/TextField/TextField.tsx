import { type FC } from "react";
import "./TextField.css";
import IconWrapper from "@/mini-components/IconWrapper/IconWrapper";
import { generateId } from "@/utils/idGenerator";
import {
  DEFAULT_TEXTS,
  CSS_CLASSES,
  ID_PREFIXES,
} from "@/utils/constants/textField.constants";

import type { TextFieldProps } from "./TextField.interface";

const TextField: FC<TextFieldProps> = ({
  icon,
  width,
  className = "",
  htmlFor,
  id,
  title,
  ...props
}) => {
  const inputId = id ?? generateId(ID_PREFIXES.TEXTFIELD);

  return (
    <div
      className={`${CSS_CLASSES.CONTAINER} ${className ?? DEFAULT_TEXTS.EMPTY}`.trim()}
      style={width ? { width } : undefined}
    >
      {htmlFor && (
        <label htmlFor={inputId} className={CSS_CLASSES.LABEL}>
          {title ?? DEFAULT_TEXTS.LABEL_FALLBACK}
        </label>
      )}

      {icon && <IconWrapper icon={icon} className={CSS_CLASSES.ICON} />}

      <input
        id={inputId}
        className={CSS_CLASSES.INPUT}
        title={title}
        {...props}
      />
    </div>
  );
};

export default TextField;
