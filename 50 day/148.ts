// Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.

// Explain & TIP: setTimeout() is a built-in JavaScript function that allows you to execute a piece of code after a specified delay. It's especially useful for scheduling tasks, animations, or delaying execution without blocking the main thread.

async function addition(num1:number,num2:number) {
    return setTimeout(() => {
        console.log(num1 + num2)
        console.log('Fetching complete')
    }, 3000);
}
console.log('Data is Fetching');

addition(5,5)


