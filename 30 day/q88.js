"use strict";
// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: The Math.round() function is perfect for rounding decimals to the closest whole number. It looks at the decimal part and decides whether to round up or down.
function rounder(a) {
    return Math.round(a);
}
console.log(rounder(45.4)); //45
console.log(rounder(45.6)); //46
