"use strict";
// Question 99: Generate a date object representing your next birthday and log it to the console.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: When creating a Date object for a future event like a birthday, you might need to adjust the year based on whether the birthday has already occurred this year or not.
function birthdayteller(month, date) {
    const today = new Date();
    let year = today.getFullYear();
    let birthday = new Date(year, month - 1, date);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    let diff = birthday.getTime() - today.getTime();
    let daysleft = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return `Next birthday on ${birthday.toLocaleDateString()}
Days left in your birthday:${daysleft}`;
}
console.log(birthdayteller(4, 5));
