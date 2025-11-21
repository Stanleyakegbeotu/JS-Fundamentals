/**
 * Script that prints a square of size X, where X is the first argument.
 *
 * Requirements:
 * 1. Must use console.log(...) to print all output.
 * 2. Must not use 'var'.
 * 3. Must use a loop (while, for, etc.).
 * 4. Prints "Missing size" if the argument is missing or not a valid integer.
 * 5. Uses the character 'X' to print the square.
 * 6. Prints nothing for negative size (-3 example).
 */

// Get the first command line argument.
const arg = process.argv[2];

// Attempt to convert the argument to an integer.
const size = parseInt(arg);

// Check if the size is a valid, positive integer.
if (!isNaN(size) && size > 0) {
  // Determine the string of X's for a single row.
  // We can use String.prototype.repeat() for efficiency, but since the constraint
  // is to "use a loop," we will build the row string using a loop.

  let rowString = '';
  // Loop to build a single row string of 'X' characters.
  for (let c = 0; c < size; c++) {
    rowString += 'X';
  }

  // Now, loop to print the rows.
  for (let r = 0; r < size; r++) {
    // Print the fully constructed row string.
    console.log(rowString);
  }

} else if (arg === undefined || isNaN(size) || size <= 0) {
  // This condition covers missing argument, non-numeric argument, or size <= 0.
  // Note: size <= 0 covers the -3 case, which should print nothing if non-negative size is expected.
  // The provided example shows -3 prints nothing. However, the first part of the
  // if/else structure is to catch missing/invalid size, which usually includes 0 and negative numbers.

  // Let's refine the check to strictly follow the examples:
  // If the argument is missing or non-numeric (NaN), print "Missing size".
  // If the argument is numeric but <= 0, print nothing.

  if (arg === undefined || isNaN(size)) {
    console.log('Missing size');
  }
  // If size is <= 0, the script simply finishes without printing anything,
  // matching the "node 8-square.js -3" output.
}
