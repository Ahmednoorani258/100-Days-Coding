"use strict";
// Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Simulating a dice roll involves randomly choosing an integer between 1 and 6. Use Math.random() along with some arithmetic to achieve this range.
function diceroller() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(diceroller());
console.log(diceroller());
console.log(diceroller());