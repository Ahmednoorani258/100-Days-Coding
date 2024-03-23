// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".

// Explain & TIP: In JavaScript, the + operator can add numbers together or join strings. Mixing a string with a number changes the number into a string for the joining.


function combineStringAndNumber(text: string, number: number): string {
    return text + number;
}
console.log(combineStringAndNumber("Age: ", 30));


function combinestrings(a?:any,b?:any,c?:any,d?:any){
    return a + b + c + d;
}


console.log(combinestrings("ahmed",10,true,"@"));
console.log(combinestrings(10,true));//in this version i got errors so i build next version


function combineStrings2(...args: any[]){
    return args.join('');
}
console.log(combineStrings2("a",10));
