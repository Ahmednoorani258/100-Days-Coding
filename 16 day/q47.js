// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
// 
// Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.
var laptops = [
    { make: "lenovo", modle: "xyz", year: "2022" },
    { make: "dell", modle: "xyz", year: "2018" },
    { make: "apple", modle: "xyz", year: "2024" }
];
var laptop1 = laptops[0], laptop2 = laptops[1];
console.log(laptop1);
console.log(laptop2);
