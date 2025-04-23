import { execMap } from "nodemon/lib/config/defaults";

let a="Apoorv";
// a=7;
console.log(a);

let b; // get value=> any because of type inference 
function value(){
    return "string";
}
b=value(); // function could return any type and b stores it.

function addTwo(num: number): number{
    return num+2;
    // return "hii";
}
function login(name: string,email:string, isPaid:boolean=false){
}

login("apoorv","email");
let val; // any type
val=addTwo(7);

let getData=(url:string):string=>{
    return "data";
}
function logErr(err):void{
    console.log(err);
}
function handleErr(err):never{
    throw new Error(err);
}

function createUser({name:string,age:number}):{}{
    console.log(name);
    return {name:"apoorv"};  
}
console.log(createUser({name:"hhh",age:10}));

// starnge behaviour of ts
let user1={name:"jjj",age:17,email:"hfgduen"}
console.log(createUser(user1));

type User={
    name:string;
    age:number;
}
function loginUser(u :User):User{
    return u;
}
console.log(loginUser({name:"hfhf",age:10}))

type CreditcardNumber={
    pin:number
}
type CreditcardCVV={
    readonly cvv:number
}
type CreditcardDate={
    start:Date
    end:Date
}
type CreditcardDetails=CreditcardNumber & CreditcardDate & CreditcardCVV;

type UserDetail={
    readonly id:string, // now it cannot be changed
    name:string
    age:number
    creditCard?:CreditcardDetails // optional and of type alias
}

const arr: number[]=[];
const arr2: Array<string>=[];
const arr3: User[]=[]; // all ways to define an array

let d: number | string=10; // a number
d="10"; // a string

function getDataFromDB(id: number | string){ // could of any two type so check.
    // id.toLowerCase()
    if(typeof id=== "string"){
        id.toLowerCase();
    }else{
        id+=1;
    }
}

// tuple
let rgb:[number, number,number]=[255,255,255];

let arr4: (number|string)[]=[1,2,"3"]; // many type array
// problem in tuple
rgb.push(255);
console.log(rgb);

// enum
enum seatChoice{
    AISLE, // gave value so each each need value 
    MIDDLE="MIDDLE",
    WINDOW=2, // after values will be calculated on basis of this value
    FOURTH
}
// seatChoice.AISLE=10; members read only

const nameAgeMap: { [index: string]: number } = {}; // index signature
nameAgeMap.Jack = 25; 
// nameAgeMap.Mark = "Fifty"; Error: Type 'string' is not assignable to type 'number'.