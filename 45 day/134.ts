// Question 134: Take a JSON string and parse it into a JavaScript object.

// Explain & TIP: JSON.parse() is used to convert a JSON string into a JavaScript object. This is particularly useful when dealing with data received as JSON from a web server or API.
let user1 = {
    name: 'Ahmed',
    age: 18,
    gender:'male'
}

console.log(user1);

let json1 = JSON.stringify(user1)
console.log(json1);

