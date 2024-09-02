function manipulateString(str) {
    // Convert the string to uppercase
    const upperStr = str.toUpperCase();

    // Return the callback function
    return function logString() {
        console.log(`The manipulated string is: ${upperStr}`);
    };
}

// Example usage:
const myString = "hello, world!";
const logResult = manipulateString(myString);
logResult(); // Output: The manipulated string is: HELLO, WORLD!
