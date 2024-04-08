"use strict";
// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.
let scores = new Map();
scores.set('physics', 50);
scores.set('chemistry', 85);
scores.set('Maths', 95);
console.log(scores);
function scorechecker(scores, subject) {
    if (scores.has(subject)) {
        console.log(`your score of ${subject} is ${scores.get(subject)}`);
    }
    else {
        console.log(`This subject is not in your mark sheet`);
    }
}
scorechecker(scores, 'Maths');
scorechecker(scores, 'Sci');
