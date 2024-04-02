"use strict";
// : Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
let magiciansnames = ["Criss Angel", "David Copperfield", "David Blaine"];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
show_magicians(magiciansnames);
function make_great(magicians) {
    let greatmagicians = magicians.map(magician => `the great ${magician}`);
    return greatmagicians;
}
let greatmagiciansnames = make_great(magiciansnames);
console.log("original names");
show_magicians(magiciansnames);
console.log("\n");
console.log("great magicians name");
show_magicians(greatmagiciansnames);
