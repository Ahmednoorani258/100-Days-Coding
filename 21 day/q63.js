"use strict";
// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
Object.defineProperty(exports, "__esModule", { value: true });
let circle = {
    kind: "circle",
    radius: 10,
};
let square = {
    kind: "square",
    width: 5,
    hieght: 5
};
let rectangle = {
    kind: "rectangle",
    width: 10,
    hieght: 4
};
console.log(rectangle);
console.log(square);
console.log(circle);
let rectangles = {
    kind: "rectangle",
    width: 20,
    hieght: 15
};
let corolla = {
    kind: "car",
    wheels: 4,
    color: "white",
    reversegear: true,
};
