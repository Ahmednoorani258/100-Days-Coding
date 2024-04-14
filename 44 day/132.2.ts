

export default class Calculator {
    a:number
    b:number
    constructor(a:number,b:number){
        this.a = a
        this.b = b
    }
    add(){
       return(this.a + this.b);
    }
    subtract(){
        return(this.a - this.b);
    }
    multiply(){
        return(this.a * this.b);
    }
    divide(){
        return(this.a / this.b);
    }
}
