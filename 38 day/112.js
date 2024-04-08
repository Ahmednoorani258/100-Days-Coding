"use strict";
// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys. It can be more efficient for large sets of data and when the key is not a string.
let countries = new Map();
countries.set('U.S.A', 'washington.D.C');
countries.set('France', 'Paris');
countries.set('Japan', 'Tokyo');
console.log(countries);
let scores = new Map();
scores.set('physics', 50);
scores.set('chemistry', 85);
scores.set('Maths', 95);
console.log(scores);
