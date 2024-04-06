"use strict";
// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Age groups can typically be categorized by specific ranges. For instance, you might consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.
function ageCategorizer(age) {
    if (age < 13) {
        return 'Child';
    }
    else if (age >= 13 && age <= 19) {
        return 'Teenager';
    }
    else if (age >= 20 && age <= 40) {
        return 'Adult';
    }
    else if (age > 40) {
        return 'Old';
    }
}
console.log(ageCategorizer(10));
console.log(ageCategorizer(30));
console.log(ageCategorizer(55));
