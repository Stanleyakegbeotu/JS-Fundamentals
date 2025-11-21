/**
 * Script that prints "C is fun" X times, where X is the first argument.
 *
 * Requirements:
 * 1. Must use console.log(...) to print all output.
 * 2. Must not use 'var'.
 * 3. Can use only two console.log calls.
 * 4. Must use a loop.
 * 5. Handles non-integer/missing arguments by printing "Missing number of occurrences".
 * 6. Handles negative numbers by printing nothing.
 */

// Get the first command line argument.
const arg = process.argv[2];

// Attempt to convert the argument to an integer.
// For "School" or missing arg, this results in NaN. For "89.89", it results in 89.
const x = parseInt(arg);

// Check if x is a valid, positive integer.
// 1. !isNaN(x): Ensures conversion was successful (not "School" or missing arg).
// 2. x > 0: Ensures the number of occurrences is positive (handles the -3 case).
if (!isNaN(x) && x > 0) {
  let output = '';
  let i = 0;

  // Build the single string containing all X lines.
  while (i < x) {
    output += 'C is fun';
    // Add a newline character for all lines except the very last one.
    if (i < x - 1) {
      output += '\n';
    }
    i++;
  }

  // First console.log call: prints the entire block of "C is fun" lines.
  console.log(output);

} else if (arg === undefined || isNaN(x)) {
  // If the argument is missing or cannot be converted to a number,
  // print the error message.
  // Second console.log call: prints the error message.
  console.log('Missing number of occurrences');
}

// If x is a negative number (e.g., -3), neither block runs, and nothing is printed,
// which matches the last example's behavior.
