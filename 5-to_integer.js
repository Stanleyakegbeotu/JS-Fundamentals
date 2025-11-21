/**
 * Script that checks if the first command-line argument can be converted to an integer.
 *
 * Requirements:
 * 1. Must use console.log(...) for all output.
 * 2. Must not use 'var'.
 * 3. Must not use 'try/catch'.
 * 4. Prints "My number: <integer>" if convertible, "Not a number" otherwise.
 */

// Retrieve the first argument (index 2 in process.argv).
const arg = process.argv[2];

// Use parseInt() to attempt conversion.
// parseInt() will attempt to parse a string into an integer.
// For non-numeric strings (like "School"), it returns NaN.
// For floats (like 89.89), it truncates the decimal part.
const number = parseInt(arg);

// Check if the result of parseInt is not NaN (Not a Number).
// The isNaN() function determines whether a value is an illegal number (NaN).
// We also ensure the argument itself exists (arg !== undefined) to handle
// the case where no argument is passed (where number would be NaN, but we want
// to differentiate that from non-numeric strings).
if (arg !== undefined && !isNaN(number)) {
  // If conversion was successful and it's not NaN, print the result.
  // The value of 'number' will be the truncated integer (e.g., 89 for "89.89").
  console.log(`My number: ${number}`);
} else {
  // This covers three cases:
  // 1. No argument passed (arg is undefined)
  // 2. Argument is an empty string or null (which parseInt treats as 0, but we want 'Not a number' if it's strictly not present or non-numeric)
  // 3. Argument is a non-numeric string (e.g., "School"), resulting in NaN.
  console.log('Not a number');
}
