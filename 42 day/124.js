// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
// Explain & TIP: The this keyword in an object's method refers to the object itself, making it straightforward to access its properties from within its methods.
var user = {
    name: 'ahmed',
    printname: function () {
        return this.name;
    },
    editname: function (name) {
        return this.name = name;
    }
};
console.log(user.printname()); //ahmed
console.log(user.editname('Obaid')); //obaid
console.log(user);
