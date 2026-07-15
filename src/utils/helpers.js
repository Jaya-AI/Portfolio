/**
 * Helper Utilities
 * @description Utility functions for common operations used across components.
 * Reduces code duplication and improves maintainability.
 */

/**
 * Scroll an element into view with smooth behavior
 * @param {HTMLElement} element - Element to scroll to
 * @param {boolean} smooth - Use smooth scrolling (default: true)
 */
export function scrollToElement(element, smooth = true) {
  if (!element) return;
  element.scrollIntoView({
    behavior: smooth ? "smooth" : "auto",
    block: "start",
  });
}

/**
 * Clamp a value between min and max
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped value
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Debounce a function to limit its execution frequency
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

/**
 * Format a number with commas for readability
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
export function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Extract year from a date string
 * @param {string} dateStr - Date string
 * @returns {number} Year
 */
export function getYear(dateStr) {
  const year = dateStr.split(" ").pop();
  return parseInt(year, 10);
}

/**
 * Calculate time in role (years of experience)
 * @param {string} periodStr - Period string (e.g., "Jan 2024 – Present")
 * @returns {string} Human-readable duration
 */
export function calculateDuration(periodStr) {
  if (periodStr.includes("Present")) {
    return "Current";
  }
  // Extract years from period string
  const years = periodStr.match(/\d+/g);
  if (years && years.length >= 2) {
    const duration = parseInt(years[1], 10) - parseInt(years[0], 10);
    return duration > 0 ? `${duration}+ years` : "1+ year";
  }
  return periodStr;
}

/**
 * Check if an element is in viewport
 * @param {HTMLElement} element - Element to check
 * @param {number} offset - Offset in pixels (default: 0)
 * @returns {boolean} True if element is in viewport
 */
export function isElementInViewport(element, offset = 0) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.bottom >= offset
  );
}

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email format
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} Success status
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
