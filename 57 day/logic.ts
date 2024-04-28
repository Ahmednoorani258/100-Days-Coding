// Comparisons
// We know many comparison operators from maths.


// Boolean is the result
// All comparison operators return a boolean value:

// true – means “yes”, “correct” or “the truth”.
// false – means “no”, “wrong” or “not the truth”.

// alert( 2 > 1 );  // true (correct)
// alert( 2 == 1 ); // false (wrong)
// alert( 2 != 1 ); // true (correct)

// String comparison

// alert( 'Z' > 'A' ); // true
// alert( 'Glow' > 'Glee' ); // true
// alert( 'Bee' > 'Be' ); // true

// The second comparison 'Glow' and 'Glee' needs more steps as strings are compared character-by-character:

// G is the same as G.
// l is the same as l.
// o is greater than e. Stop here. The first string is greater.

// Comparison of different types


// alert( '2' > 1 ); // true, string '2' becomes a number 2
// alert( '01' == 1 ); // true, string '01' becomes a number 1


// alert( 0 == false ); // true
// alert( 0 === false ); // false, because the types are different


// Comparison with null and undefined


// alert( null === undefined ); // false
// alert( null == undefined ); // true



// // Strange result: null vs 0
// // Let’s compare null with a zero:

// // alert( null > 0 );  // (1) false
// // alert( null == 0 ); // (2) false
// // alert( null >= 0 ); // (3) true


// An incomparable undefined
// The value undefined shouldn’t be compared to other values:

// alert( undefined > 0 ); // false (1)
// alert( undefined < 0 ); // false (2)
// alert( undefined == 0 ); // false (3)


// Summary

// Comparison operators return a boolean value.

// Strings are compared letter-by-letter in the “dictionary” order.

// When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).

// The values null and undefined equal == each other and do not equal any other value.

// Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.