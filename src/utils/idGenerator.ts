/**
 * This module provides utility functions to generate unique IDs.
 * @param {string} prefix - prefix for the ID (e.g., 'textfield', 'button')
 * @returns {string} unique ID in the format: prefix-randomString
 */
export const generateId = (prefix: string = 'element') => {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
};

/**
 * Generate multiple unique IDs
 * @param {string} prefix - prefix for the IDs
 * @param {number} count - number of IDs to generate
 * @returns {string[]} array of unique IDs
 */
export const generateIds = (prefix: string = 'element', count: number = 1) => {
  return Array.from({ length: count }, () => generateId(prefix));
};
