// Primitives
// string
// number
// boolean
// null
// undefined
// bigint
// symbol

// Primitives are immutable
// equality operator only works well on primitives
// primitives not having properties - object wrapper
// primitives can return their types

// Strings
// declaration of strings
// + sign works
// string properties

// NUMBERS
let a = 2000;
let b = 2_000_000; // with numeric separators
let c = 0b1011; // Binary - Base 2 0b
let d = 0o744; // Octal - Base 8 0o
let e = 0x2f4; // Hexadecimal - Base 16 0x
let f = 1.5e2; // Exponetial
let g = NaN;

console.log(typeof g);

// console.log(2 ** 5);
// console.log(2 * 2 * 2 * 2 * 2)

// Base 2 - 0, 1
// Base 8 - 0, 1, 2, 3, 4, 5, 6, 7
// Base 16 - 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F

console.log(c);
console.log(d);
console.log(e);

console.log((756).toString(16));
console.log((484).toString(8));
console.log((11).toString(2));
console.log(1.5 * 100);
console.log(f);

// OPERATORS - Numeric operators and bitwise operators
// Numeric operators
a + b;
a - b;
a * b;
a / b;
a % b; // modulo operator
console.log(2 ** 5); // exponential operator

// BODMAS
// B - Bracket - 0

// E - Exponential - 1

// D - Division - 2
// M - Multiplication - 2

// A - Addition - 3
// S - Subtraction - 3

// P - 0, E - 1, MD - 2, AS - 3
console.log((2 * 9) / 3 - (5 + 4));
// 2 * 9 / 3 - 9
// 18 / 3 - 9
// 6 - 9
// -3
console.log(2 * 9 - 3 + 5 / 4);
// 18 - 3 + 1.25
// 15 + 1.25 = 16.25
// 18 / 3 - 5 + 4;
// 6 - 5 + 4;
// 1 + 4;
// 5;
// 2 * 3 - 5 + 4;

// 6 - 5 + 4;

// 6 - 1;

// 5;

// Math & Number
console.log(Math.PI);
console.log(Math.pow(2, 5));
console.log(Math.abs(-3));
console.log(Math.sqrt(81));

console.log(Math.round(3.3));
console.log(Math.ceil(3.3)); // rounds up
console.log(Math.floor(-3.7)); // rounds down
console.log(Math.trunc(-3.7)); // rounds down
console.log(Math.random());

console.log(Math.max(1, 2, 3, 4, 5, 6));
console.log(Math.max(...[1, 2, 3, 4, 5, 6]));
console.log(Math.max.apply(null, [1, 2, 3, 4, 5, 6]));

console.log(Math.min(1, 2, 3, 4, 5, 6));
console.log(Math.min(...[1, 2, 3, 4, 5, 6]));
console.log(Math.min.apply(null, [1, 2, 3, 4, 5, 6]));

console.log(Number.parseInt("1011", 2));
console.log(Number.parseInt("744", 8));
console.log(Number.parseFloat(12.2));
console.log(Number.isNaN(NaN));
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 2);
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 2));

// Bitwise operators
console.log(7 & 5); // AND
console.log(6 | 3); // OR
console.log(7 ^ 5); // EXCLUSIVE OR
console.log(5 << 2); // left shift in
console.log(10 >> 2); // right shift in

console.log((5).toString(2));
console.log(Number.parseInt("10100", 2));

console.log((10).toString(2));
console.log(Number.parseInt("10", 2));

// BOOLEANS
let bool1 = true;
let bool2 = false;

// Operators in Booleans
// Logical and comparison operators

// Logical operators
// bool1; // Logical Not
// bool1 || bool2; // Logical Or
// bool1 && bool2; // Logical And

// bool1 ?? bool2; // Nullish Coalescing Operator
// bool1 ? 1 : 2; // Ternary operator

console.log(!bool1);
console.log(!!bool1);

console.log(!bool2);
console.log(!!bool2);

console.log(!!5);

console.log(Boolean(1));

// Truthy value

// Falsy Values
// 0, "", undefined, null, NaN, false
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(false));

console.log(Boolean(" "));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean("first"));

console.log(true || false);
// Short circuiting
console.log(true || true);
console.log(false || true);
console.log(false || false);

console.log([] || false);

console.log(true && false);
console.log(true && true);
console.log(false && true);
console.log(false && false);

console.log([] && {});
console.log(0 && true);

console.log(null || "string");

// Nullish Coalescing operator - ??
let firstBool = true
// console.log(true ?? false
// console.log(true ?? true); true
// console.log(false ?? true); false
// console.log(false ?? false); false
// console.log(null ?? true); true
// console.log(undefined ?? true); true


