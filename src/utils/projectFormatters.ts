import type { Project, CurrencyCode, Price } from '@/components/projectCard/ProjectCard.interface';

/**
 * Format the price of a project according to the currency
 * @param price -  amount and currency (USD | CRC | EUR)
 * @returns Formatted string with the price (e.g.: "$1,850 USD", "₡925,500 CRC", "€1,700 EUR")
 */
export const formatPrice = (price?: Price): string => {
  if (!price) return '';
  
  const currencySymbols: Record<CurrencyCode, string> = {
    USD: '$',
    CRC: '₡',
    EUR: '€'
  };
  const symbol = currencySymbols[price.currency];
  const formattedAmount = new Intl.NumberFormat('en-US').format(price.amount);
  
  return `${symbol}${formattedAmount} ${price.currency}`;
};

/**
 * Format the dimensions of a project
 * @param dimensions - Object with width, height and unit
 * @returns Formatted string (e.g.: "80 x 60 cm")
 */
export const formatDimensions = (dimensions?: {width: number; height: number; unit: string;}): string => {
  if (!dimensions) return '';
  
  return `${dimensions.width} x ${dimensions.height} ${dimensions.unit}`;
};

/**
 * Generates the message for WhatsApp about a project
 * @param project - Project to inquire about
 * @returns Formatted message for WhatsApp
 */
export const generateWhatsAppMessage = (project: Project): string => {
  const parts = [
    `Hola! Me interesa la obra "${project.title}"`,
  ];
  
  if (project.year) {
    parts.push(`(${project.year})`);
  }
  
  if (project.price) {
    parts.push(`Precio: ${formatPrice(project.price)}`);
  }
  
  if (project.metadata?.dimensions) {
    parts.push(`Dimensiones: ${formatDimensions(project.metadata.dimensions)}`);
  }
  
  parts.push('¿Podrías darme más información?');
  
  return parts.join(' ');
};

/**
 * Opens WhatsApp with a message about a project
 * @param project - Project to inquire about
 * @param phoneNumber - WhatsApp phone number (international format)
 */
export const openProjectWhatsApp = (project: Project, phoneNumber: string): void => {
  const message = generateWhatsAppMessage(project);
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
};
/**
 * Generates the alt text for an image of the project
 * @param project - Project
 * @param imageIndex - Index of the image
 * @returns String for the alt attribute
 */
export const getImageAltText = (project: Project, imageIndex: number): string => {
  return `${project.title} - Image ${imageIndex + 1}`;
};

/**
 * Generates aria-label for project actions
 */
export const getAriaLabels = (project: Project) => ({
  viewProject: `Ir a la página de detalles de ${project.title}`,
  buyProject: `Comprar ${project.title}`,
  whatsApp: `Contactar por WhatsApp sobre ${project.title}`,
  addFavorite: `Agregar ${project.title} a favoritos`,
  removeFavorite: `Remover ${project.title} de favoritos`,
  projectCard: `Proyecto ${project.title}`,
});
