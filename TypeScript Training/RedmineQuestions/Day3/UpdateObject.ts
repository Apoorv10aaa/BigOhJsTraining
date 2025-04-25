type Obj={
    [key:string]:any;
}
const obj:Obj={
    a:1,
    b:"Hello",
    c:true
}

function updateObject<T extends object,S extends keyof T>(obj:T,key:S,val:T[S]):T{
    if(typeof obj=== "object" && obj!=null){
        obj[key]=val;
    }
    return obj;
}

console.log(updateObject(obj,"b","hello"))