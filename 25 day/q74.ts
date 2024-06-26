// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

// Explain & TIP: Swapping variables is a common task. You can use a temporary variable to hold one value while you swap them around. It's like juggling where you temporarily place one ball in a basket to free up your hand.


function swapingvariables(a,b){
    let num1 = a;
    let num2 = b;
    console.log(`current values of a: ${num1} and b: ${num2}`);
    let swapper = num1;
    num1 = num2;
    num2 = swapper

    console.log(`after swapping a: ${num1} b: ${num2}`);
    
}

swapingvariables(5,10)//10,5