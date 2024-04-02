"use strict";
//                              #100 DAYS CODING CHALLENGE
//==================================DAY 01 =========================================
Object.defineProperty(exports, "__esModule", { value: true });
//Q1) BUILDING SETUP FOR CODING?
// COMPLETED
//Q2) Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personname = "Muhammad Ahmed Noorani";
console.log(`Hello, ${personname}!,"Would u like to learn some Python today"`);
//Q3)Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personname2 = "muhammad ahmed noorani";
let lowercase = personname2.toLowerCase();
console.log(lowercase);
let uppercase = personname2.toUpperCase();
console.log(uppercase);
//in title case ,first we need to split the sentece in to words,then we 
// need to apply loop for converting first word in to uppercase of evry word
// and then aply lower case to remaining character and then we get the title case
// sentecs in result
let word = personname2.split(" ");
let titlecase = "";
for (let i = 0; i < word.length; i++) {
    titlecase += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase() + " ";
}
console.log(titlecase);
