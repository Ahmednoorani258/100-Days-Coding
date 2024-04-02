"use strict";
// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: When working with decimals in JavaScript, results can be unexpectedly long. Rounding can help keep numbers manageable.
function multiplyDecimals(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(multiplyDecimals(0.1, 0.2));
console.log(multiplyDecimals(0.08, 0.1));
