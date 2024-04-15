// Question 133: Write a JavaScript object and convert it into a JSON string.

// Explain & TIP: JSON (JavaScript Object Notation) is a lightweight data-interchange format. It's easy for humans to read and write and for machines to parse and generate. Converting a JavaScript object into a JSON string can be done using JSON.stringify().


let user = {
    name: 'Ahmed',
    age: 18,
    gender:'male'
}

console.log(user);

let json = JSON.stringify(user)
console.log(json);

let json2 = JSON.parse(json)
console.log(json2);
