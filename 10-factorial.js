/**
 * Script that computes and prints the factorial of the first argument using recursion.
 *
 * Requirements:
 * 1. Must use console.log(...) to print all output.
 * 2. Must not use 'var'.
 * 3. Must use a recursive function.
 * 4. Factorial of NaN (missing/non-integer arg) is 1.
 */

// Retrieve the first argument and attempt to convert it to an integer.
const arg = process.argv[2];
const number = parseInt(arg);

// Define the recursive factorial function using a function expression.
const factorial = function (n) {
  // 1. Base Case / Invalid Input Handling:
  // If n is NaN (missing arg, non-numeric string) OR if n is 0 or 1, return 1.
  // This satisfies the "Factorial of NaN is 1" requirement and the mathematical base case.
  if (isNaN(n) || n <= 1) {
    return 1;
  }

  // Handle negative numbers: Although not explicitly shown, factorials are typically
  // defined for non-negative integers. Since the example for -3 in 8-square was to
  // print nothing, but here the input is only checked for NaN, we rely on the
  // `n <= 1` condition to stop recursion for negatives, returning 1, which is safest.

  // 2. Recursive Step: n * factorial(n - 1)
  return n * factorial(n - 1);
};

// Call the function with the parsed number and print the result.
console.log(factorial(number));
