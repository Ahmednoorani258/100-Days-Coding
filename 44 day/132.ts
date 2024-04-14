
// Question 132: Discuss the difference between default and named exports in JavaScript modules.

// Explain & TIP: JavaScript provides two main types of exports: default and named. A module can have only one default export, but multiple named exports. This flexibility supports various use cases in module design.


// Importing named exports:
import { utilOne, utilTwo } from "./132.3";

// Importing a default export:
import Calculator from "./132.2";

// This code illustrates the syntax and usage differences between default and named exports.
let A = new Calculator(4,5).add()
let S = new Calculator(4,5).subtract()
let M = new Calculator(4,5).multiply()
let d = new Calculator(4,5).divide()
console.log(A);
console.log(S);
console.log(M);
console.log(d);

utilOne()
utilTwo()