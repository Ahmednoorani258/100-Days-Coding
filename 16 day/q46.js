// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
// Explain & TIP: Objects can also contain functions (methods) that can perform actions using the object's properties. This introduces method definition within objects.
//making an object
var laptop = {
    make: "Lenove",
    model: "V196hql",
    year: "2018",
    describe: function () {
        console.log("this laptop is ".concat(this.make, " ,and the model is \"").concat(this.model, "\" of year  ").concat(this.year));
    }
};
laptop.describe();
