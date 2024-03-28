// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

// Explain & TIP: JavaScript allows you to create functions in two ways: declarations that name the function and can be called before they're defined, and expressions that are stored in variables and are called using the variable name.

// Function declaration for squaring a number
function squareDeclaration(a: number): number {
    return a * a;
}

// Function expression for squaring a number
const squareExpression = function(a: number): number {
    return a * a;
};
console.log(squareDeclaration(6));
console.log(squareExpression(6)); 
