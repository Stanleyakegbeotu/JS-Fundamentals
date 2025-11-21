/**
 * Script that prints three specific lines using an array, a loop, and only one console.log.
 *
 * Requirements:
 * 1. Must use console.log(...) to print all output (only once).
 * 2. Must not use 'var'.
 * 3. Must not use any 'if/else' statement.
 * 4. Must use a loop.
 * 5. Must use an array of strings.
 */

const lines = [
  'C is fun',
  'Python is cool',
  'JavaScript is amazing'
];

// Initialize an empty string to build the final output.
let outputString = '';

// Use a standard for loop to iterate over the array elements.
for (let i = 0; i < lines.length; i++) {
  // Append the current line to the output string.
  outputString += lines[i];

  // If this is not the last element, add a newline character (\n)
  // to separate the lines when printed. We use a ternary operator here
  // which is an acceptable alternative to an if/else block for conditional formatting.
  outputString += (i < lines.length - 1) ? '\n' : '';
}

// Print the entire constructed string in a single call.
console.log(outputString);
