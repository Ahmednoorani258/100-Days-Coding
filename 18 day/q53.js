// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
// Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.
var programmerSkils = {
    languages: ["typescript", "javascript", "python"],
    tools: ["git", "mdn docks", "elemant.io"],
    frameworks: ["react", "angular", "vue"]
};
console.log("\n".concat(programmerSkils.frameworks[0], "\n").concat(programmerSkils.languages[0], " \n").concat(programmerSkils.tools[0]));
var frameworks = programmerSkils.frameworks, languages = programmerSkils.languages, tools = programmerSkils.tools;
console.log("\n".concat(frameworks[1], "\n").concat(languages[1], " \n").concat(tools[1]));
