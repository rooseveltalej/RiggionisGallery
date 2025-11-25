import { useCallback } from "react";

export const useWhatsAppLink = () => {
  const generateLink = useCallback(
    (phoneNumber: string, message: string): string => {
      const encodedMessage = encodeURIComponent(message);
      const cleanPhone = phoneNumber.replace(/\D/g, "");
      return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    },
    [],
  );

  return { generateLink };
};
