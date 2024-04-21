// Question 146: Show an example of a callback function used to filter an array of numbers.

// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function. This method is commonly used to search through an array and create a subset of it based on certain criteria.

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Uses .filter() with a callback function to filter out numbers greater than 5
const filteredNumbers: number[] = numbers.filter((number) => number > 5);
const onlyEven:number[] = numbers.filter((num) => num % 2 === 0)
const onlyOdd:number[] = numbers.filter((num) => num % 2 !== 0)

console.log(filteredNumbers); // Outputs: [6, 7, 8, 9, 10]
console.log(onlyEven); // Outputs: [2, 4, 6, 8, 10]
console.log(onlyOdd); // Outputs: [1, 3, 5, 7, 9]



