// Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.

// Explain & TIP: The for...of loop is a modern loop introduced in ES6, designed to iterate over iterable objects like arrays, strings, Maps, NodeLists, and more, making it very readable and easy to use.

let favMovies:string[]=[]
favMovies.push('Movie1')
favMovies.push('Movie2')
favMovies.push('Movie3')
favMovies.push('Movie4')

for(let ele of favMovies){
    console.log(ele);   
}

favMovies.forEach(ele => console.log(ele))