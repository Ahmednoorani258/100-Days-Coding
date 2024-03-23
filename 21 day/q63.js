// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
var circle = {
    kind: "circle",
    radius: 10,
};
var square = {
    kind: "square",
    width: 5,
    hieght: 5
};
var rectangle = {
    kind: "rectangle",
    width: 10,
    hieght: 4
};
console.log(rectangle);
console.log(square);
console.log(circle);
