// custom type guard
interface Fish{
    name:string
    swim():void
}
const fish:Fish={
    name:"fish1",
    swim:()=>{
        console.log("swim");
    }
}
interface Dog extends Animal{
    name:string,
    bark():void
}
function isFish(pet: unknown): pet is Fish { // unknown makes use.
    return (pet as Fish).swim !== undefined; // as for assertion to type Fish
}
const dog:Dog={
    species:"Dog",
    name:"Apoorv",
    bark:()=>{
        console.log("Bark")
    }
}
console.log(isFish(dog));


interface Animal{
    species:string
}
// conditional type
type example1= Dog extends Animal ? string : number;
type example2=Fish extends Animal ? string : number;

// mapped types
type User = {
    id: number;
    name: string;
    email: string;
  }
type RelaxedUser={
    [U in keyof User]:User[U];
}
let relaxedUser1={};

// template literal type
type Size = "small" | "medium" | "large";
type SizeMessage = `The selected size is ${Size}.`;

let message: SizeMessage;

message = "The selected size is small.";  // Valid
// message = "The selected size is extra-large.";  Error
type ApiEndpoints = "users" | "posts" | "comments";
type ApiPath = `/api/${ApiEndpoints}`;

const userPath: ApiPath = "/api/users";
// const invalidPath: ApiPath = "/api/unknown";

// some genrics example
type DogOrFish= Dog | Fish;
function getRandom<Item>(arr:Item[]):Item{
    return arr[1];
}
const numArr=[1,2,3,4];
const stringArr=["a","b","c","d"];
const animalArr=[dog,fish];

let num=getRandom(numArr);
let str=getRandom(stringArr);
let animal=getRandom(animalArr);
console.log(animal);

// genric constraints
function printDog<T extends Dog>(dog:T):void{
    console.log(dog.bark());
    
}
printDog(dog);

// literal vs as vs satisfies
type EX= number | string | boolean | true;

let a:EX="hljk";
console.log(typeof a);
let b="hii" as EX;
console.log(typeof b);
let c="gggg" satisfies EX;
console.log(typeof c);