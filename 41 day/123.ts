// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.

// Explain & TIP: To find a specific character in a string, you can iterate through each character and use a condition to check for vowels. The loop can stop once a vowel is found.




function stopOnVowels(str:string){
    let vowels = 'aeiouAEIOU';
    for(let char of str){
        if(vowels.includes(char)){
            console.log(`Found vowel${char}`);
            break
        }
        console.log(char);
        
    }
}

stopOnVowels('ahmed')
stopOnVowels('hmdf')