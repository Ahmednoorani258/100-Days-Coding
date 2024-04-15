// Question 135: Explain how you can format a JSON string with proper indentation for readability.
// Explain & TIP: JSON.stringify() can take additional parameters to format the resulting JSON string. Adding an indent level as the third argument beautifies the output, making it more readable.
var person = {
    name: 'ahmed',
    city: 'Karachi',
    age: 18
};
var jsonstring = JSON.stringify(person, null, 2);
var jsonstring1 = JSON.stringify(person, null, 5);
var jsonstring2 = JSON.stringify(person, null, 1);
console.log(jsonstring);
console.log(jsonstring1);
console.log(jsonstring2);
