import React from "react";

export type SkillTagProps = React.HTMLAttributes<HTMLSpanElement> & {
  text: string;
};

const SkillTag: React.FC<SkillTagProps> = ({ text, className = "", ...rest }) => (
  <span className={`skill-tag ${className}`} {...rest}>{text}</span>
);

export default SkillTag;
