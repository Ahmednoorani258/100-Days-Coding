// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.

// Explain & TIP: You can get the current hour using the Date object and its getHours() method. Remember, hours are in 24-hour format, so 12 PM is 12.

const currenttime = new Date()
if(currenttime.getHours() < 12){
    console.log('good morning');
}else{
    console.log('good night');
    
}