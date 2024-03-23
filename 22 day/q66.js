// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
// Explain & TIP: The && operator in JavaScript checks if both sides are true. It's great for confirming several things are true all at once.
function checkingboolean(val1, val2) {
    return val1 && val2;
}
console.log(checkingboolean(true, false));
console.log(checkingboolean(true, true));
console.log(checkingboolean(false, false));
