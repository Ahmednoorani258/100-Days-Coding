// Question 139: List three reserved words in JavaScript and create a valid use case for each.
// Explain & TIP: Reserved words in JavaScript are words that have a special meaning and cannot be used as identifiers (e.g., variable names, function names). Understanding these can help prevent syntax errors and make your code more readable.
// Define a class representing a person
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
// Create an instance of the Person class
var person = new Person("ahmed", 18);
person.greet();
// Reserved word: return - used to exit a function and return a value from that function
function add(a, b) {
    return a + b;
}
add(4, 5);
