interface Person{
    name:string
    age:number
}
function describePerson(person:Person){
    console.log(`Name ${person.name}, Age ${person.age}`);  
}
let person:Person={
    name:"Apoorv",
    age:22
}
describePerson(person)

export {};