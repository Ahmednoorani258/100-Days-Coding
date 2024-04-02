"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let friends = ["ahmed", "obaid", "qayyum"];
console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "qayyum"; // Correcting the error by accessing a valid index.
