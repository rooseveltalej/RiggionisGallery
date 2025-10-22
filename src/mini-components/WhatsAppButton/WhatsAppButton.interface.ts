import type { ButtonProps } from "../Button/Button.interface.ts";

export interface WhatsAppButtonProps extends Omit<ButtonProps, 'icon' | 'text'> {
  text: string;
  phoneNumber: string;
  message: string;
}