// Question 99: Generate a date object representing your next birthday and log it to the console.
// Explain & TIP: When creating a Date object for a future event like a birthday, you might need to adjust the year based on whether the birthday has already occurred this year or not.
function birthdayteller(month, date) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, date);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    var diff = birthday.getTime() - today.getTime();
    var daysleft = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return "Next birthday on ".concat(birthday.toLocaleDateString(), "\nDays left in your birthday:").concat(daysleft);
}
console.log(birthdayteller(3, 5));
// function getNextBirthday(month: number, day: number): Date {
//     const today = new Date();
//     let year = today.getFullYear();
//     const birthday = new Date(year, month -1, day); 
//     if (birthday < today) {
//         birthday.setFullYear(year + 1);
//     }
//     return birthday;
// }
// // Replace with your birth month and day
// const nextBirthday = getNextBirthday(12, 25); // Example: December 25th
// console.log("Next birthday on:", nextBirthday.toLocaleDateString());
// // Shows the date of the next birthday.
