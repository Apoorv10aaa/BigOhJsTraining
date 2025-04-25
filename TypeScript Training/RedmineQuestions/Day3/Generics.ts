type Generic<T,S extends number|string|boolean>={
    name:string,
    id:T,
    dbID?:S
}
let data:Generic<number,boolean>={
    name:"Apoorv",
    id:10,
    dbID:false
}
type User={
    name:string,
    id:number
}
const user={name:"a",id:10} satisfies User;

function getValueOfProperty<T,S extends keyof T>(val:T,key:S):T[S]{
    return val[key];
}
let value=getValueOfProperty(user,"name")

export {};