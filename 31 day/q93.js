// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
// Explain & TIP: To replace an item in an array, find its index using .indexOf(), then use that index to set a new value with array bracket notation.
var vehicles = ['Cars', 'Bike', 'truck', 'Cycle'];
function replacer(array, indname, replacename) {
    var index = array.indexOf(indname);
    vehicles[index] = replacename;
}
console.log(vehicles);
console.log(replacer(vehicles, 'Bike', 'Rikshaw'));
console.log(vehicles);
