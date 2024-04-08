// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

// Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop, providing access to each key-value pair.

const students = new Map<string,number>();
students.set('Ahmed',1)
students.set('Obaid',2)
students.set('Owais',3)

students.forEach((name,id)=>{
    console.log(`Student ID:${name},Name:${id}`);
    
})