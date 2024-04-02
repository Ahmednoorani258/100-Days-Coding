"use strict";
// Question 92: Write a function to remove the last element from an array and return the removed element.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: The .pop() method removes the last element from an array and returns that element. This can be useful when you need to work with the removed item.
function itemRemover(a) {
    return `\nDeleted item: [ ${a.pop()} ]`;
}
let vegis = ['Potato', 'Tomato', 'cabbage'];
console.log(vegis);
console.log(itemRemover(vegis));
console.log(vegis);
