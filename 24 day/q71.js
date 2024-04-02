"use strict";
// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: let allows you to declare variables that can be reassigned, while const is for variables that should not change once set. Using const helps make your code safer and more predictable.
let age = 25;
age = 26;
console.log(age);
const name = "ahmed";
try {
    name = "amjad";
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}
