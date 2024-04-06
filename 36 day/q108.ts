// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

// Explain & TIP: To compare strings without considering their case (uppercase/lowercase), you can convert both strings to the same case before comparing.

function duplicateDetactor(a:string,b:string){
    return a.toLowerCase() === b.toLowerCase()
}

console.log(duplicateDetactor('AHMED','ahMed'));
console.log(duplicateDetactor('OBAID','Owais'));
