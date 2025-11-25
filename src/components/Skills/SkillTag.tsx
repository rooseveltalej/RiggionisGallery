import React from "react";

export type SkillTagProps = React.HTMLAttributes<HTMLSpanElement> & {
  text: string;
};

const SkillTag: React.FC<SkillTagProps> = ({
  text,
  className = "",
  ...rest
}) => (
  <span {...rest} className={`skill-tag ${className}`}>
    {text}
  </span>
);

export default SkillTag;
