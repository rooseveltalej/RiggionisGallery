/**
 * This module provides utility functions to generate unique IDs.
 * @param {string} prefix - prefix for the ID (e.g., 'textfield', 'button')
 * @returns {string} unique ID in the format: prefix-randomString
 */
export declare function generateId(prefix?: string): string;

/**
 * Generate multiple unique IDs
 * @param {string} prefix - prefix for the IDs
 * @param {number} count - number of IDs to generate
 * @returns {string[]} array of unique IDs
 */
export declare function generateIds(prefix?: string, count?: number): string[];
