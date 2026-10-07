/**
 * Basic arithmetic for JavaScript number operands.
 * No implicit input validation is performed. Callers should supply numbers.
 * @module mylib
 */

/**
 * Add two numbers.
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number} The sum of a and b.
 */
export function add(a, b) {
  return a + b;
}

/**
 * Subtract the second number from the first.
 * @param {number} a - Number to subtract from.
 * @param {number} b - Number to subtract.
 * @returns {number} The difference a minus b.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * Multiply two numbers.
 * @param {number} a - First factor.
 * @param {number} b - Second factor.
 * @returns {number} The product of a and b.
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * Divide the first number by a nonzero second number.
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number} The quotient a divided by b.
 * @throws {RangeError} If b is 0 or -0.
 */
export function divide(a, b) {
  if (b === 0) {
    throw new RangeError('ZeroDivision: divisor must not be zero');
  }
  return a / b;
}
