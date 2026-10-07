/**
 * Unit tests for mylib using Mocha and Chai's Expect style.
 * Only the library is imported, so npm test never executes main.js.
 */
import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../mylib.js';

describe('mylib arithmetic operations', function () {
  let numbers;

  // Suite setup: run once before the first test.
  before(function () {
    numbers = Object.freeze({ a: 10, b: 2 });
    console.log('Before: test data prepared');
  });

  // Suite cleanup: run once after the last test.
  after(function () {
    numbers = undefined;
    console.log('After: test data released');
  });

  describe('add', function () {
    it('adds two positive numbers', function () {
      expect(add(numbers.a, numbers.b)).to.equal(12);
    });

    it('adds a negative number', function () {
      expect(add(-5, 2)).to.equal(-3);
    });

    it('adds decimal numbers within a tolerance', function () {
      expect(add(0.1, 0.2)).to.be.closeTo(0.3, 1e-12);
    });
  });

  describe('subtract', function () {
    it('subtracts the second number from the first', function () {
      expect(subtract(numbers.a, numbers.b)).to.equal(8);
    });

    it('returns a negative difference', function () {
      expect(subtract(2, 5)).to.equal(-3);
    });
  });

  describe('multiply', function () {
    it('multiplies two positive numbers', function () {
      expect(multiply(numbers.a, numbers.b)).to.equal(20);
    });

    it('multiplies a negative number', function () {
      expect(multiply(-3, 4)).to.equal(-12);
    });

    it('returns zero when a factor is zero', function () {
      expect(multiply(7, 0)).to.equal(0);
    });
  });

  describe('divide', function () {
    it('divides by a nonzero number', function () {
      expect(divide(numbers.a, numbers.b)).to.equal(5);
    });

    it('returns a fractional quotient', function () {
      expect(divide(7, 2)).to.equal(3.5);
    });

    it('allows a zero dividend with a nonzero divisor', function () {
      expect(divide(0, 5)).to.equal(0);
    });

    it('throws a RangeError for a zero divisor', function () {
      expect(() => divide(10, 0)).to.throw(
        RangeError, /^ZeroDivision: divisor must not be zero$/
      );
    });

    it('throws a RangeError for a negative zero divisor', function () {
      expect(() => divide(10, -0)).to.throw(
        RangeError, /^ZeroDivision: divisor must not be zero$/
      );
    });

    it('throws a RangeError for zero divided by zero', function () {
      expect(() => divide(0, 0)).to.throw(
        RangeError, /^ZeroDivision: divisor must not be zero$/
      );
    });
  });
});
