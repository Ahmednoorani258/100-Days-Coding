// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

// Explain & TIP: The .map() method transforms each item in an array according to a specific function and returns a new array with the transformed items.

function lenghtmeas(arr:string[]){
    return arr.map(arr => arr.length)// it tells lenght of every word
}

let names:string[] = ['Ahmed','Obaid','Owais','Arib']

console.log(lenghtmeas(names));
console.log(names);

