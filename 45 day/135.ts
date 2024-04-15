
// Question 135: Explain how you can format a JSON string with proper indentation for readability.

// Explain & TIP: JSON.stringify() can take additional parameters to format the resulting JSON string. Adding an indent level as the third argument beautifies the output, making it more readable.

let person = {
    name: 'ahmed',
    city: 'Karachi',
    age: 18
}

let jsonstring = JSON.stringify(person,null,2)
let jsonstring1 = JSON.stringify(person,null,5)
let jsonstring2 = JSON.stringify(person,null,1)

console.log(jsonstring);
console.log(jsonstring1);
console.log(jsonstring2);