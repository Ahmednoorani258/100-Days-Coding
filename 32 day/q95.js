"use strict";
// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function.
function filterf(arr) {
    return arr.filter(arr => arr > 10);
}
let numbers = [1, 2, 4, 10, 50, 80, 23, 5, 9, 10];
console.log(filterf(numbers));
