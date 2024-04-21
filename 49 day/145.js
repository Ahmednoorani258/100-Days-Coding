// Question 145: Create a function that accepts a callback and invokes it with some arguments.
// Explain & TIP: Callbacks are functions passed as arguments to another function. This design pattern is very common in JavaScript for asynchronous operations, event listeners, or to customize the behavior of a function with custom actions.
// This function accepts a callback function and invokes it with given arguments
function calculator(callback, num1, num2) {
    callback(num1, num2);
}
var addition = function (a, b) { console.log(a + b); };
var subtraction = function (a, b) { console.log(a - b); };
var multiplication = function (a, b) { console.log(a * b); };
var Division = function (a, b) { console.log(a / b); };
calculator(addition, 4, 5); //9
calculator(subtraction, 4, 5); //-1
calculator(multiplication, 4, 5); //20
calculator(Division, 4, 5); //0.8
