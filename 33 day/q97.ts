// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

// Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way. The Date object provides methods to get the day, month, and year, which you can then assemble into any format you need


function dateformate(){
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth(); 
    const year = now.getFullYear();

    return `${day}/${month}/${year}`
}

console.log(dateformate());






