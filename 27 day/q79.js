"use strict";
// Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Objects are collections of properties, kind of like a box for storing related information. You can create an object to group related data and access its properties using either dot notation or bracket notation.
let car = {
    make: "honda",
    model: "civic",
    year: 2024
};
console.log(car.model);
