"use strict";
// Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
Object.defineProperty(exports, "__esModule", { value: true });
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
let city_country = (city, country) => //arrow function
 {
    return `${city},${country}`;
};
console.log(city_country("karachi", "pakistan"));
console.log(city_country("lahore", "pakistan"));
console.log(city_country("mumbai", "india"));
