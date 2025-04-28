type MergedData<T,U>=T extends object ? 
    U extends object ?
        {[key in keyof T | keyof U]: key extends keyof U ? U[key]  : key extends keyof T ? T[key] : never;}
        : U
    : T;


function mergeData<T extends object,U extends object>(obj1:T,obj2:U):MergedData<T,U>{
    const result={...obj1} as MergedData<T,U>;

    for(let key in obj2 as (keyof U)[]){
        let value=obj2[key];
        if(key in obj1){
            if(typeof obj1[key]=='object' && typeof obj2[key]=='object'){
                result[key]=mergeData(obj1[key],obj2[key]);
            }else if(typeof obj1[key]===typeof obj2[key]){
                result[key]=obj2[key];
            }else{
                console.log("Type mismatch Error");
                return result;
            }
        }else{
            result[key]=value;
        }
    }
    return result;
}

const obj1 = { a: 1, b: { c: 2 },f:10 ,g:{h:1}};
const obj2 = { b: { d: 3 }, e: 4 ,f:11,g:"hii"};
const merged = mergeData(obj1, obj2);
console.log(merged);
