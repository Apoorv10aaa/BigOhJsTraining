type MapObject<T,F extends (...args:any[])=>any>={
    [key in keyof T]:ReturnType<F>
}

function mapObject<T extends object,F extends (...args:any[])=>any>(obj:T,f:F):MapObject<T,F>{
    const result={} as MapObject<T,F>;
    for(let key in obj as (keyof T)[]){
        result[key]=f(obj[key]);
    }
    return result;
}
const originalObject = { a: 1, b: 2, c: 3 };
const mappedObject = mapObject(originalObject, (value) => value.toString());
console.log(mappedObject);

export {};