// Question 100: Use the JavaScript Math object to find the square root of 144.
// Explain & TIP: The Math.sqrt() function is a straightforward way to calculate the square root of any positive number, directly providing the result you need.
var squareroot = Math.sqrt(144);
console.log(squareroot);
function squarerootmaker(x) {
    var a = x.forEach(function (ele) { return Math.sqrt(ele); });
    return a;
}
console.log(squarerootmaker([144, 144]));
