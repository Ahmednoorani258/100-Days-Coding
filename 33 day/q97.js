"use strict";
// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way. The Date object provides methods to get the day, month, and year, which you can then assemble into any format you need
// function dateformate(){
//     const now = new Date();
//     const day = now.getDate();
//     const month = now.getMonth(); 
//     const year = now.getFullYear();
//     return `${day}/${month}/${year}`
// }
// console.log(dateformate());
// This function formats the current date as DD-MM-YYYY
function getCurrentDateFormatted() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0'); // Ensures the day is two digits
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Adds 1 because months are 0-indexed
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(getCurrentDateFormatted()); // Outputs the current date in DD-MM-YYYY format
// Shows today's date, neatly formatted.
