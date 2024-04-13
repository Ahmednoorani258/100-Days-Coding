// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.

// Explain & TIP: Arrow functions can take zero, one, or multiple parameters. When dealing with multiple parameters, you enclose them in parentheses.


let multiplier = (...nums:number[]) => nums.reduce((a,b) => a*b , 1)
console.log(multiplier(2,3,4,5,6))