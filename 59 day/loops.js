

//1) What is the last value alerted by this code? Why?

// let i = 3;

// while (i) {
//   console.log( i--);
// }

//the output of last value = 1 bcs its decreasing its value 




// 2) For every loop iteration, write down which value it outputs and then compare it with the solution.
// Both loops alert the same values, or not?

// let a = 0;
// while (++a < 5) console.log( a ,a);//prefix form

// let b = 0;
// while (b++ < 5) console.log( b ,b);//postfix form


// // Which values get shown by the "for" loop?
// for (let i = 0; i < 5; ++i) alert( i );//0 - 4

// for (let i = 0; i < 5; i++) alert( i );//0 - 4


// Output even numbers in the loop

// for (let i = 0; i < 5; i++){
//   if(i % 2 == 0){
//   console.log(`${i}:Even`);
//   }else{
//     console.log(`${i}:Odd`)
//   }
// }


// Output prime numbers

// let n = 3;

// nextPrime:
// for (let i = 2; i <= n; i++) { // for each i...

//   for (let j = 2; j < i; j++) { // look for a divisor..
//     if (i % j == 0) continue nextPrime; // not a prime, go next i
//   }

//   console.log( i ); // a prime
// }


