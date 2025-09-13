
import type { InputHTMLAttributes } from "react";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	placeholder?: string;
	icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	width?: string | number;
}
