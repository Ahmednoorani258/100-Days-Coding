// Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
// Explain & TIP: The continue statement can be used to skip over an iteration in a loop. It's particularly handy when you want to ignore specific cases without stopping the entire loop.
for (var i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
var names = ['ahmed', 'obaid', 'owais', 'shayan'];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var ele = names_1[_i];
    if (ele === 'obaid') {
        continue;
    }
    console.log(ele);
}
