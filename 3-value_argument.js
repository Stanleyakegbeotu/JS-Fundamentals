const firstArgument = process.argv[2];

/**
 * Check if an argument was passed by checking if the element at index 2
 * is defined. If no argument is passed, process.argv[2] will be 'undefined'.
 */
if (firstArgument === undefined) {
    // Print "No argument" if the value is undefined (no argument was provided).
    console.log("No argument");
} else {
    // Print the argument itself.
    console.log(firstArgument);
}
