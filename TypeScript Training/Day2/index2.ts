// class User{
//     name:string;
//     email:string;
//     private pass:number;
//     readonly dob:number;
//     constructor(name:string,email:string,pass:number,dob:number) {
//         this.name=name;
//         this.email=email;
//         this.pass=pass;
//         this.dob=dob;
//     }
// }

class Person{
    private readonly dob:number;
    constructor(
        public name:string,
        public email:string,
        dob:number,
        private pass?:number,
    ) {}

    get getEmail(): string{
        return this.email;
    }
    set setPass(pass){
        this.pass=pass;
    }
}


let u1=new Person("Apoorv","hfhghg",12102002);

// interface Story{
//     id:string;
//     uploadedBy:number
// }
// class Instagram implements Story{

//     constructor(
//         public id:string, // cannot make it private
//         public uploadedBy:number
//     ){}
// }


abstract class Story{
    constructor(
        public id:string,
        public uploadedBy:number
    ){}
    abstract uploadStory():void;
    changeId(id){
        this.id=id;
    }
}
class Instagram extends Story{
    constructor(public id:string,public uploadedBy:number){
        super(id,uploadedBy);
    }
    uploadStory(): void {
        console.log("story uploaded");
    }

}
