// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

// Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

function arrcalc(arr:number[]){
    return arr.reduce((a, b)=> a + b)
}


let numbers2 = [1, 2, 4, 10, 50, 80, 23, 5, 9, 10];
console.log(arrcalc(numbers2));

