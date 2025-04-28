function flatGet<T extends object,S extends keyof T>(obj:T,key:S):T[S]{
    return obj[key];
}

// type PathToKey<T, Path extends string[]> = Path extends []
//   ? T
//   : Path extends [infer First, ...infer Rest]
//     ? First extends keyof T
//       ? PathToKey<T[First], Rest>
//       : undefined
//     : undefined;

function deepGet<T extends object,K extends keyof T>(obj:T,path:string | string[]):T[K]{
    if(typeof path=='string'){
        path=path.split(".")
    }
    let current=obj;
    for(let key of path){
        if (current && current.hasOwnProperty(key)) {
            current = current[key];
        }else{
            return undefined as T[K];
        }
    }
    return current as T[K];
}



const person= {
    name: "John Doe",
    age: 30,
    g: {
        s: "123 Main St",
        f: "Anytown",
        a:{
            b:{
                c:1
            }
        }
    },
};


let val1=deepGet(person,"g.a.b.c");
console.log(val1);
let val2=deepGet(person,["g","a","b"])
console.log(val2);


