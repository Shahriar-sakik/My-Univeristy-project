/**
 * Demonstrate every exported arithmetic function.
 * Run with npm start or node main.js. Tests do not import this file.
 */
import { add, subtract, multiply, divide } from './mylib.js';

const a = 10;
const b = 2;

console.log(`${a} + ${b} = ${add(a, b)}`);
console.log(`${a} - ${b} = ${subtract(a, b)}`);
console.log(`${a} * ${b} = ${multiply(a, b)}`);
console.log(`${a} / ${b} = ${divide(a, b)}`);
