// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

// Explain & TIP: This program can handle any number of scores you give it, and it tells you the average score. Handy for seeing how well you did overall!

function avgScore(...score:number[]){
    
    let total = score.reduce((add,score) => add + score,0);
    return total/score.length;
}

console.log(avgScore(80,55,62,34,89,100));

