//Data types in JS/TS

let types = [String,Number,Boolean,null,undefined,BigInt,Symbol]

//================================================================================
//Numbers
//=============================================================================

let message:Number = 123456;

let n = 123;
n = 12.345;

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN

//=================================================================================
//Bigint
//==================================================================================

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// So to say, all odd integers greater than (253-1) can’t be stored at all in the “number” type.

//==================================================================================
//String
//===============================================================================

let str:string = "Hello";
let str2:string = 'Single quotes are ok too';
let phrase:string = `can embed another ${str}`;

// In TypeScript, there are 3 types of quotes.

// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.

//EXAMPLE:::
let name1 = "John";

// embed a variable
alert( `Hello, ${name1}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

//==================================================================================
//Boolean
//===============================================================================

let nameFieldChecked:boolean = true; // yes, name field is checked
let ageFieldChecked:boolean = false; // no, age field is not checked

let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")

//==================================================================================
//Null
//===============================================================================

let age:null = null

// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

// The code above states that age is unknown.

//==================================================================================
//Undefined
//===============================================================================

let age2:undefined;

alert(age); // "undefined"

// …But we don’t recommend doing that. Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things.

//==================================================================================
//Symbol
//===============================================================================


// The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)