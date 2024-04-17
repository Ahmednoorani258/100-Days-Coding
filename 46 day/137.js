// Question 137: Implement a try-catch block to handle potential errors in a block of code.
// Explain & TIP: The try-catch statement marks a block of statements to try, and specifies a response, should an exception be thrown. It's a critical feature for robust error handling in JavaScript.
try {
    throw new Error('error');
}
catch (error) {
    console.log(error.message);
}
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    }
    catch (error) {
        console.error('An error occurred:', error.message);
        // You can also handle the error differently here or re-throw it if needed
    }
}
console.log(divide(10, 2)); // Outputs: 5
console.log(divide(10, 0));
