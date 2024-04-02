"use strict";
// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: The .replace() method can search for a specific text pattern in a string and replace it with something else. By default, it only replaces the first occurrence, but you can use a global regex for multiple replacements.
function replacer(sentence) {
    return sentence.replace(/javascript/g, "Typescript");
}
console.log(replacer(`I love to write code in javascript and javascript is my love`));
