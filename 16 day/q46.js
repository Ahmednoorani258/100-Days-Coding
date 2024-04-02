"use strict";
// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Objects can also contain functions (methods) that can perform actions using the object's properties. This introduces method definition within objects.
//making an object
let laptop = {
    make: "Lenove",
    model: "V196hql",
    year: "2018",
    describe: function () {
        console.log(`this laptop is ${this.make} ,and the model is "${this.model}" of year  ${this.year}.`);
    }
};
laptop.describe();
