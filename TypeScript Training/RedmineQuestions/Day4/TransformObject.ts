type TransformObjectKeys<T,Prefix extends string>={
    [key in keyof T as key extends string ? `${Prefix}${key}`:never]: 
        T[key] extends object ?
            TransformObjectKeys<T[key],Prefix>  : T[key];
}

// function transformObjectKeys<T,P extends string>(obj:T,prefix:P):TransformObject<T,P>{
//     const result={} as TransformObject<T,P>;
//     for(let key in obj as (keyof T)[]){
//         let value=obj[key];
//         let newKey=`${prefix}${key}`;
//         if(typeof value==='object' &&  value!==null){
//             result[newKey]=transformObjectKeys(value,prefix);
//         }else{
//             result[newKey]=value;
//         }
//     }
//     return result;
// }


type MyObject = {
    a: {
      b: number;
      c: {
        d: string;
      };
    };
    e: boolean;
}

type NewObj=TransformObjectKeys<MyObject,"prefixed_">;

let obj:NewObj={
    prefixed_a:{
        prefixed_b:10,
        prefixed_c:{
            prefixed_d:"hii",
        }
    },
    prefixed_e:true
}