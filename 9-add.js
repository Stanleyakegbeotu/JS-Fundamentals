/**
 * Script that defines and uses a function to add two integers.
 *
 * Requirements:
 * 1. Must use console.log(...) to print all output.
 * 2. Must not use 'var'.
 * 3. Must define a function with the prototype: function add(a, b).
 * 4. Arguments are accessed via process.argv.
 */

// Function definition as required: function add(a, b)
function add (a, b) {
  // Convert the arguments to integers using parseInt().
  // If the arguments are missing (undefined), parseInt will return NaN for that value.
  const numA = parseInt(a);
  const numB = parseInt(b);

  // Perform the addition.
  // If either numA or numB is NaN, the result of the addition will be NaN.
  return numA + numB;
}

// Get the first and second arguments from the command line.
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Call the function with the retrieved arguments and print the result directly.
// This handles all the examples:
// 1. Missing args: add(undefined, undefined) -> NaN + NaN -> NaN
// 2. One arg missing: add('1', undefined) -> 1 + NaN -> NaN
// 3. Two valid args: add('1', '7') -> 1 + 7 -> 8
console.log(add(arg1, arg2));
