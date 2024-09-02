function ageInDays(person) {
    // Concatenate the first and last name into a single string
    const fullName = `${person.firstName} ${person.lastName}`;

    // Calculate the person's age in days
    const ageInDays = person.age * 365;

    // Return a callback function that logs the message
    return function logMessage() {
        console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    };
}

// Example usage:
const person = {
    firstName: 'Mithun',
    lastName: 'S',
    age: 20
};

const logPersonInfo = ageInDays(person);
logPersonInfo(); // Output: The person's full name is John Doe and their age in days is 9125.
