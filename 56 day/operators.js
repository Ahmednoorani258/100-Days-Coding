// Lesson navigation
// Terms: “unary”, “binary”, “operand”
// Maths
// String concatenation with binary +
// Numeric conversion, unary +
// Operator precedence
// Assignment
// Modify-in-place
// Increment/decrement
// Bitwise operators
// Comma


// Terms: “unary”, “binary”, “operand”

// An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:

let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied
// An operator is binary if it has two operands. The same minus exists in binary form as well:

let a= 1, y = 3;
alert( y - a ); // 2, binary minus subtracts values
// Formally, in the examples above we have two different operators that share the same symbol: the negation operator, a unary operator that reverses the sign, and the subtraction operator, a binary operator that subtracts one number from another.

// Maths


// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,  return remainder
// Exponentiation **.//The exponentiation operator a ** b raises a to the powerof b


// String concatenation with binary +

let s = "my" + "string";
alert(s); // mystring

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers


// Numeric conversion, unary +


let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5


// Operator precedence


// If an expression has more than one operator, the execution order is defined by their precedence, or, in other words, the default priority order of operators.



// Assignment


let d = 1;
let b = 2;

let c = 3 - (d = b + 1);

alert( d ); // 3
alert( c ); // 0


// Modify-in-place

let  t, fs,z;

t = fs = z = 2 + 2;

alert( t ); // 4
alert( fs ); // 4
alert( z); // 4


// Increment/decrement

let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3

counter--;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1
// Bitwise operators


// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )


// Comma


let comm = (1 + 2, 3 + 4);

alert( comm ); // 7 (the result of 3 + 4)
