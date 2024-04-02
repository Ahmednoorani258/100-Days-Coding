// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.

// Explain & TIP: To find the difference between two dates, you can subtract one Date object from another, which gives you the difference in milliseconds. Convert that to days to see how many days are left until a specific event.

function remainingDaysInNewYear(){
    let today = new Date()
    let newYear = new Date( today.getFullYear() + 1,0 ,1)
    let diff = newYear.getTime() - today.getTime()
    let days = Math.ceil(diff / (1000*60*60*24))

    return `${days} days remaining in New Year`
}

console.log(remainingDaysInNewYear());


















// let today = new Date();
// let newYear = new Date(today.getFullYear() + 1,0,1)
// let diff = newYear.getTime() - today.getTime()
// let days = Math.ceil(diff / (1000*60*60*24))

// console.log(today);
// console.log(newYear);
// console.log(diff);
// console.log(days);




