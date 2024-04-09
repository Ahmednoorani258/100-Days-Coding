// Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.
// Explain & TIP: The for...of loop is a modern loop introduced in ES6, designed to iterate over iterable objects like arrays, strings, Maps, NodeLists, and more, making it very readable and easy to use.
var favMovies = [];
favMovies.push('Movie1');
favMovies.push('Movie2');
favMovies.push('Movie3');
favMovies.push('Movie4');
for (var _i = 0, favMovies_1 = favMovies; _i < favMovies_1.length; _i++) {
    var ele = favMovies_1[_i];
    console.log(ele);
}
favMovies.forEach(function (ele) { return console.log(ele); });
