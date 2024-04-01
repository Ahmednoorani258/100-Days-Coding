// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
// Explain & TIP: parseInt() for whole numbers or parseFloat() for decimals are handy for turning number-like strings into real numbers, allowing you to perform mathematical operations on them.
function converter(a) {
    return parseInt(a);
}
console.log(converter("123"));
console.log(converter("123.6"));
function converter2(a) {
    return parseFloat(a);
}
console.log(converter2("123"));
console.log(converter2("123.6"));
