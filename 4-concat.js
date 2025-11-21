/**
 * Script that prints two arguments passed to it, in the format: "arg1 is arg2"
 *
 * Requirements:
 * 1. Must use console.log(...) for all output.
 * 2. Must not use 'var'.
 * 3. Handles missing arguments by printing the string 'undefined'.
 *
 * Arguments are accessed via process.argv, starting at index 2.
 */

// Access the potential arguments. They will hold the value 'undefined' if missing.
const firstArgRaw = process.argv[2];
const secondArgRaw = process.argv[3];

// Explicitly check if the argument value is 'undefined' and use the string "undefined"
// for printing if it is, otherwise use the argument itself.
const firstArg = firstArgRaw === undefined ? 'undefined' : firstArgRaw;
const secondArg = secondArgRaw === undefined ? 'undefined' : secondArgRaw;

// Use a template literal to construct the required output string and print it.
console.log(`${firstArg} is ${secondArg}`);
