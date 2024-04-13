// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
var _this = this;
// Explain & TIP: In traditional functions, this refers to the object that called the function, which can vary depending on the context. In arrow functions, this is lexically bound, meaning it uses this from the code that contains the arrow function.
var traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value);
    },
    arrowFunction: function () {
        console.log("Arrow function:", _this.value);
    },
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();
var FvsAFunc = {
    names: 'ahmed',
    nfunc: function () { console.log(this.names); },
    Afunc: function () { console.log(_this.names); }
};
FvsAFunc.nfunc();
FvsAFunc.Afunc();
