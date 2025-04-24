//  interface
interface User{
    readonly dbId:number,
    userId:number
    email:string
    googleId?: String
    // startTrial:()=>string
    startTrial():string
    getCoupon(couponName:string,value:number):number
}

// reopening of interface
interface User{
    githubToken:number
}
// inheritance of interfaces
interface SuperUser extends User{
    role: "Admin"|"Trainer"
}
let user1:User={
    dbId:10,
    userId:22,
    email:"hfhf",
    startTrial:()=>{
        return ""
    },
    getCoupon(name:"copoun",val:10){
        return 63636;
    },
    githubToken:212322
}
let superUser1:SuperUser={
    role:"Admin",
    dbId:10,
    userId:22,
    email:"hfhf",
    startTrial:()=>{
        return ""
    },
    getCoupon(name:"copoun",val:10){
        return 63636;
    },
    githubToken:212322
}

type SuccessResult = {
  success: true;
  data: any;
}

type ErrorResult = {
  success: false;
  error: string;
}

type Result = SuccessResult | ErrorResult;

// genrics

function func1<T>(val:T):T{
    return val;
}
func1(40);
func1("ggg");

function func2<T>(heroes:T[]){
    for(let hero of heroes){
        console.log(hero);
    }
}
let func3=<T>(heroes: T[]): T=>{
    return heroes[0];
}
func2([1,true,3,"4"]);

// in operator
console.log("role" in superUser1); // check if a property is in a interface or object.

function func5(val:string | null){
    if(typeof val==="string") console.log(val.toUpperCase()); // narrowing
    return ;
}
func5(null)


type UserKeys=keyof User;
function func6<K>(property:UserKeys){
    console.log(property);
}
func6(userId)

export {};