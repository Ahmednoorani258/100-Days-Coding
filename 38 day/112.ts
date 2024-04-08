// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.

// Explain & TIP: The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys. It can be more efficient for large sets of data and when the key is not a string.

let countries = new Map<string,string>();
countries.set('U.S.A','washington.D.C')
countries.set('France','Paris')
countries.set('Japan','Tokyo')

console.log(countries);


let scores = new Map<string,number>();
scores.set('physics',50)
scores.set('chemistry',85)
scores.set('Maths',95)

console.log(scores);

