function greet(name) {
    return new Promise((resolve) => {
        // Create the greeting message
        const message = `Hello, ${name}!`;
        
        // Resolve the promise with the greeting message
        resolve(message);
    });
}

// Example usage:
greet('Mithun').then((message) => {
    console.log(message); // Output: Hello, Mithun!
});
