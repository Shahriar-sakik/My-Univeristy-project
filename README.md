# mylib arithmetic

A small JavaScript ES module containing `add`, `subtract`, `multiply`, and
`divide`, with a separate demonstration program and Mocha + Chai unit tests.

## Requirements

- Node.js 22.12.0 or newer; Node.js 24 is recommended for this project.
- npm (included with Node.js).
- Development dependencies: Mocha 12.0.3 and Chai 6.3.0.

The library and main program use no external runtime dependencies.
`"type": "module"` enables JavaScript `import` and `export` syntax.

## Install and run

Open a terminal in this directory and install the locked dependencies:

```sh
npm ci
```

Run the demonstration separately:

```sh
npm start
```

Expected output:

```text
10 + 2 = 12
10 - 2 = 8
10 * 2 = 20
10 / 2 = 5
```

Run only the unit tests:

```sh
npm test
```

The suite contains 14 tests. It imports `mylib.js` directly and never imports
`main.js`. Mocha's `before` and `after` hooks prepare and release shared test
data once per suite. Their messages appear before and after the tests.

## Using the library

```js
import { add, subtract, multiply, divide } from './mylib.js';

add(10, 2);      // 12
subtract(10, 2); // 8
multiply(10, 2); // 20
divide(10, 2);   // 5

try {
  divide(10, 0);
} catch (error) {
  console.log(error.message);
  // ZeroDivision: divisor must not be zero
}
```

## What the tests check

- Addition: positive numbers, a negative operand, and decimal precision.
- Subtraction: operand order and a negative result.
- Multiplication: positive numbers, a negative operand, and a zero factor.
- Division: a normal quotient, a fractional quotient, and a zero dividend.
- Errors: divisors `0` and `-0`, and the special case `0 / 0`.

Chai's Expect style compares actual outputs with known expected values.
Error tests verify both `RangeError` and the complete error message.
The decimal test uses a tolerance of `1e-12` because JavaScript numbers
use binary floating-point arithmetic.

## Limitations

Callers must supply JavaScript numbers. The library does not validate strings,
missing arguments, `NaN`, or infinity, and does not support BigInt.
It does not provide exact decimal arithmetic or detect overflow.
The chosen test examples do not prove correctness for every possible input.

## Repository contents

Keep only `.gitignore`, `README.md`, `package.json`, `package-lock.json`,
`mylib.js`, `main.js`, and `tests/mylib.test.js` in the submission repository.
The lockfile is intentional: it records dependency versions for `npm ci`.
Do not upload `node_modules`, environment files, OS files, report drafts,
archives, or generated output.

## Maintainer

Md Shahriar Hossain, LAB University of Applied Sciences.
