// Question 18: Seeing the World: Think of at least five places you’d like to visit.
let places:string[] = ["Pakistan","India","USA","Thailand"]

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);//first we need to convert array in alphabetical order then we need to reverse it so the result is reverse alphabetical order