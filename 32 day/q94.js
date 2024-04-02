// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
// Explain & TIP: The .map() method transforms each item in an array according to a specific function and returns a new array with the transformed items.
function lenghtmeas(arr) {
    return arr.map(function (arr) { return arr.length; }); // it tells lenght of every word
}
var names = ['Ahmed', 'Obaid', 'Owais', 'Arib'];
console.log(lenghtmeas(names));
console.log(names);
