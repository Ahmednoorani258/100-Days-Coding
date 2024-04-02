"use strict";
// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
Object.defineProperty(exports, "__esModule", { value: true });
var guests = ["Sir Okasha", "Sir Ameen Alam", "Arib"];
console.log("Great news! I found a big dinner table!");
// Adding more guests in array
guests.unshift("Ahmed"); //add item at start
guests.splice(guests.length / 2, 0, "Obaid"); //add item after 2nd index 
guests.push("Owais"); // add item in end
guests.forEach(guest => {
    //using ,.foreach method to print array name one by one
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
