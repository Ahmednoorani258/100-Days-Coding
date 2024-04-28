//Alert,prompt & Confirm

alert("Hello");


// The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”.

//Prompt

// The visitor can type something in the prompt input field and press OK. Then we get that text in the result. Or they can cancel the input by pressing Cancel or hitting the Esc key, then we get null as the result.

// The call to prompt returns the text from the input field or null if the input was canceled.

// For instance:
let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!



//Confirm

let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed

// The function confirm shows a modal window with a question and two buttons: OK and Cancel.

// The result is true if OK is pressed and false otherwise.

// For example: