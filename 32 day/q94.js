"use strict";
// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: The .map() method transforms each item in an array according to a specific function and returns a new array with the transformed items.
function lenghtmeas(arr) {
    return arr.map(arr => arr.length); // it tells lenght of every word
}
let names = ['Ahmed', 'Obaid', 'Owais', 'Arib'];
console.log(lenghtmeas(names));
console.log(names);
