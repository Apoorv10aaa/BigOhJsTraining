type DataObj<T>={
    [key in keyof T]:T[key] extends object ?  DataObj<T[key]> : T[key];
}
const obj= {
    name: "Alice",
    age: 30,
    address: {
      city: "Wonderland",
      zip: 12345,
      location: {
        country: "Fantasy",
      },
    },
    isActive: true,
};

function updateValueWithPrefix<T extends object>(obj:T,prefix:string):DataObj<T>{
    const result = {} as DataObj<T>;
    for(const key in obj as (keyof T)[]){
        let value=obj[key];
        if(typeof value==='object' && value!==null){
            result[key]=updateValueWithPrefix(value,prefix);
        }else if(typeof value==='string'){
            result[key]=prefix+value;
        }else{
            result[key]=value;
        }
    }
    return result;
}
console.log(updateValueWithPrefix(obj,"Hello "));

export {};