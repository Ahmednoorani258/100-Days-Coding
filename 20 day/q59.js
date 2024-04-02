"use strict";
// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Imagine you have a magic box that can add a specific number to any number you put in it. This program makes that magic box for you!
function specialadder(inputnum) {
    return function (number) {
        return number + inputnum;
    };
}
let addFive = specialadder(5);
console.log(addFive(10));
let addhund = specialadder(100);
console.log(addhund(100));
