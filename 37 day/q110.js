"use strict";
// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: A common grading system assigns letter grades based on score ranges. You can use an if-else-if chain to determine the grade.
function gradeAssigner(score) {
    if (score > 90) {
        return 'A';
    }
    else if (score >= 80) {
        return 'B';
    }
    else if (score >= 70) {
        return 'C';
    }
    else if (score >= 60) {
        return 'D';
    }
    else {
        return 'F';
    }
}
console.log(gradeAssigner(50));
