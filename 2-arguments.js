const argumentCount = process.argv.length - 2;

// Use conditional logic (if/else if/else) to determine the output message.
if (argumentCount === 0) {
    // If no arguments are passed (length is 2)
    console.log("No argument");
} else if (argumentCount === 1) {
    // If only one argument is passed (length is 3)
    console.log("Argument found");
} else {
    // Otherwise, two or more arguments are passed
    console.log("Arguments found");
}
