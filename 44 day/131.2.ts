export {user}

class user{
    name: string;
    id:number;
    addres:string
    constructor(name:string ,id:number,address:string){
        this.name = name
        this.id = id
        this.addres = address
    }
    greet(){
        console.log(`username:${this.name}\nID:${this.id}\nAddress:${this.addres}`
        );
    }
}