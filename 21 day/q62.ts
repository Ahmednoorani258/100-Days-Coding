// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

// Explain & TIP: This blueprint, called an interface, helps ensure all students have the same kind of information, making your code more organized.


interface student{
    name: string,
    age: number,
    subjects: string[]
}

let student: student = {
    name:"ahmed",
    age:18,
    subjects:[ "Math","English" ]
}


let student2: student = {
    name: "arib",
    age: 19,
    subjects:["computer", "maths"]
}
console.log(student);
console.log(student2);