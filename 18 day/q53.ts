// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

// Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.

let programmerSkils = {
    languages:["typescript","javascript","python"],
    tools:["git","mdn docks","elemant.io"],
    frameworks:["react","angular","vue"]
}

console.log(`
${programmerSkils.frameworks[0]}
${programmerSkils.languages[0]} 
${programmerSkils.tools[0]}`
);

let {frameworks , languages , tools} = programmerSkils;

console.log(`
${frameworks[1]}
${languages[1]} 
${tools[1]}`
);