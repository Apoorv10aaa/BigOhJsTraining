type TranformKeys<T>={
    [key in keyof T as key extends `${string}Id`? `${string}Identifier`:key]:
        T[key] extends object ?
            T[key] extends (infer U)[] ?
                {[i:string]:TranformKeys<U>} :
            TranformKeys<T[key]> 
        : T[key]
}

function TransformKeysAndValues<T extends object>(obj: T):TranformKeys<T>{
    const result={} as TranformKeys<T>;
    for(let key in obj as (keyof T)[]){
        let value=obj[key];
        let newKey=`${key.slice(0,key.length-2)}Identifier`
        if(typeof value==='object' && value!=null){
            if(Array.isArray(value)){
                result[key.endsWith("Id") ? newKey : key]=[];
                value.forEach((ele)=>{
                    if(typeof ele==='object') result[key.endsWith("Id") ? newKey : key].push(TransformKeysAndValues(ele));
                    else if(typeof ele==='string') result[key.endsWith("Id") ? newKey : key].push(ele.toUpperCase());
                    else result[key.endsWith("Id") ? newKey : key].push(ele);

                })
                
            }else{
                result[key.endsWith("Id") ? newKey : key]=TransformKeysAndValues(value);
            }
        }else{
            result[key.endsWith("Id") ? newKey : key]=typeof value==='string' ? value.toUpperCase() :value ;
        }
    }
    return result;
}

const data = {
    userId: "john_doe",
    details: {
      addressId: "abc123",
      name: "John",
      attributes: {
        itemId: "xyz456",
        info: "Some info here",
      },
    },
    items: [
      {
        productId: "p123",
        description: "a product",
      },
      "just a string",
    ],
  };

let output=TransformKeysAndValues(data);
console.log(output);
export {}

