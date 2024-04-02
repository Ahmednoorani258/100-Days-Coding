"use strict";
// Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ['ahmed', 'obaid', 'owais', 'Kamran', 'Nasir'];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ['usaid', 'ahmed', 'obaid', 'junnaid', 'arib'];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
for (let x of new_users)
    if (current_users.includes(x)) {
        console.log(`uswername"${x}" is alredy taken please enter a new user name`);
    }
    else {
        console.log(`usernmae"${x}"is availible`);
    }
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
