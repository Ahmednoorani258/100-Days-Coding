//Q13)Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// let transportation:string[] = [ "car", "bus", "rikshaw" ];
// console.log(transportation);
// for(let ele of transportation){
//     if(ele === "car"){
//     console.log(`"I would like to own a ${ele}"`)
//     }else if(ele === "bus"){
//         console.log(`"I would like to ride a ${ele}"`);
//     }else if(ele === "rikshaw"){
//         console.log(`"I would like to travel in a ${ele}"`);
//     }
// }
//Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guests = ["Sir Okasha", "Sir Ameen Alam", "Arib"];
// let sendinv = guests.forEach(guest =>{
//     console.log(`"Dear ${guest} u are invited to dinner"`);
// })
//Q15)Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
//guest didnot attend
var notAttend = "Sir Ameen Alam";
console.log(notAttend + " Not attend to dinner");
//relpace guest
var newGuest = "Sir zia khan";
guests[guests.indexOf(notAttend)] = newGuest;
//updt invite
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var ele = guests_1[_i];
    console.log("'dear ".concat(ele, " U r invited to paty'"));
}
