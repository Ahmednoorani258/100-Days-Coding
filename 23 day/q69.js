// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
// Explain & TIP: Division can give you a whole part (quotient) and a leftover part (remainder). Returning both in an object is a neat way to keep them together.
// This function divides two numbers and finds the quotient and remainder
function divandremiainder(a, b) {
    var quotient = Math.floor(a / b);
    var remainder = a % b;
    return { quotient: quotient, remainder: remainder };
}
console.log(divandremiainder(10, 3));
console.log(divandremiainder(50, 6));
