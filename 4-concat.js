if (process.argv.length < 4) {
    // Log a helpful message if arguments are missing
    console.log("Error: Please provide two arguments.");
    console.log("Usage Example: node print_arguments.js first_value second_value");
} else {
    // Use const for variables, adhering to the "no var" rule
    const argumentOne = process.argv[2];
    const argumentTwo = process.argv[3];

    // Print the arguments in the required format: "arg1 is arg2"
    // Using a template literal for clean string interpolation
    console.log(`${argumentOne} is ${argumentTwo}`);
}
