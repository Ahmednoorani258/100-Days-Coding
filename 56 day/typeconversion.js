//Type conversion

// String Conversion
// Numeric Conversion
// Boolean Conversion



//string conversion

let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

//Numeric conversion

alert( "6" / "2" ); // 3, strings are converted to numbers

let str = "123";
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number

//Boolean conversion

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false


// Please note: the string with zero "0" is true
// Some languages (namely PHP) treat "0" as false. But in JavaScript, a non-empty string is always true.


alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)