// formutils.js
// Utility functions for validating and handling form input in the Kanban board project

/**
 * Check if a field is empty
 * @param {string} value - The input value
 * @returns {boolean} - True if empty, false otherwise
 */
export function isEmpty(value) {
  return !value || value.trim().length === 0;
}

/**
 * Validate minimum length
 * @param {string} value - The input value
 * @param {number} min - Minimum required length
 * @returns {boolean}
 */
export function hasMinLength(value, min) {
  return value.trim().length >= min;
}

/**
 * Validate maximum length
 * @param {string} value - The input value
 * @param {number} max - Maximum allowed length
 * @returns {boolean}
 */
export function hasMaxLength(value, max) {
  return value.trim().length <= max;
}

/**
 * Validate priority (must be one of: 'low', 'medium', 'high')
 * @param {string} value - The priority value
 * @returns {boolean}
 */
export function isValidPriority(value) {
  const allowed = ['low', 'medium', 'high'];
  return allowed.includes(value.toLowerCase());
}

/**
 * Collect validation errors for a task form
 * @param {Object} formData - Task form data
 * @returns {Object} - Errors keyed by field name
 */
export function validateTaskForm(formData) {
  const errors = {};

  if (isEmpty(formData.title)) {
    errors.title = 'Title is required';
  } else if (!hasMinLength(formData.title, 3)) {
    errors.title = 'Title must be at least 3 characters';
  }

  if (formData.description && !hasMaxLength(formData.description, 200)) {
    errors.description = 'Description must be under 200 characters';
  }

  if (!isValidPriority(formData.priority)) {
    errors.priority = 'Priority must be low, medium, or high';
  }

  return errors;
}