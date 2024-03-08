// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
var guests = ["Sir Okasha", "Sir Ameen Alam", "Arib"];
console.log("Great news! I found a big dinner table!");
// Adding more guests in array
guests.unshift("Ahmed"); //add item at start
guests.splice(guests.length / 2, 0, "Obaid"); //add item after 2nd index 
guests.push("Owais"); // add item in end
console.log("sorry i can only invite two person on diner");
while (guests.length > 2) {
    // we r using while loop to remove names from array with the help of pop
    //pop removes item from end
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner due to short table."));
}
console.log("_Invited guest_");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
