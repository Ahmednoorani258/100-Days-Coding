// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

// Explain & TIP: A type alias lets you create a custom type. It's like a shortcut for describing more complex information, such as the details of different shapes.

type shapes = {
    kind: "circle" | "rectangle" | "square";
    radius? : number;
    width?:number;
    hieght?: number;
}

let circle:shapes = {
    kind: "circle",
    radius: 10,
}

let square:shapes = {
    kind: "square",
    width: 5,
    hieght: 5
}

let rectangle:shapes ={
    kind:"rectangle",
    width: 10,
    hieght: 4 
}

console.log(rectangle);
console.log(square);
console.log(circle);


let rectangles:shapes = {
    kind: "rectangle",
    width: 20,
    hieght: 15
}


type vehicls = {
    kind: "car"|"bike"|"truck"|"rickshaw"
    wheels?: number,
    color?: string,
    reversegear?: boolean,
}

let corolla:vehicls ={
    kind: "car",
    wheels: 4,
    color: "white",
    reversegear: true,
}