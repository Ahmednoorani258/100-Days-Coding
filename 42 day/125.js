// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
// Explain & TIP: You can leverage the this keyword to interact with multiple properties within the same object, providing a cohesive way to manipulate internal data.
var sum = {
    a: 0,
    b: 0,
    c: 0,
    add: function (a, b) {
        this.a = a;
        this.b = b;
        return this.c = this.a + this.b;
    }
};
console.log(sum); // a:0 , b:0
console.log(sum.add(4, 5)); //9
console.log(sum); // a:4 , b:5
