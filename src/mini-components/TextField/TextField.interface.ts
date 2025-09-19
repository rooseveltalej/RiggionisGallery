
import type { InputHTMLAttributes } from "react";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	width?: React.CSSProperties["width"];
}
