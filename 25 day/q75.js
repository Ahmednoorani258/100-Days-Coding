"use strict";
// Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Compound assignment operators combine an arithmetic operation with assignment, making your code cleaner and more concise. Instead of writing x = x + 2, you can simply write x += 2.
// This function uses compound assignment operators for different operations
function useCompoundOperators() {
    let x = 4;
    console.log("Initial x:", x);
    x += 2;
    console.log("After addition:", x);
    x -= 1;
    console.log("After subtraction:", x);
    x *= 3;
    console.log("After multiplication:", x);
    x /= 2;
    console.log("After division:", x);
}
useCompoundOperators();
// function arithmetic(){
//     function add(a,b){
//         let num1 = a
//         let num2 = b
//         let sum = a+=b
//        return(`${a} + ${b} = ${sum}`)
//     }
//     function subtraction(a,b){
//         let num1 = a
//         let num2 = b
//         let sum = a-=b
//         return(`${a} + ${b} = ${sum}`)
//     }
//     function multiplication(a,b){
//         let num1 = a
//         let num2 = b
//         let sum = a*=b
//         return(`${a} + ${b} = ${sum}`)
//     }
//     function division(a,b){
//         let num1 = a
//         let num2 = b
//         let sum = a/=b
//         return(`${a} + ${b} = ${sum}`)
//     }
//     console.log(arithmetic);
// }
// arithmetic()
