// Question 92: Write a function to remove the last element from an array and return the removed element.

// Explain & TIP: The .pop() method removes the last element from an array and returns that element. This can be useful when you need to work with the removed item.


function itemRemover(a:string[]){
    return `\nDeleted item: [ ${a.pop()} ]`
}

let vegis:string[] =['Potato','Tomato','cabbage'] 
console.log(vegis);
console.log(itemRemover(vegis));
console.log(vegis);

