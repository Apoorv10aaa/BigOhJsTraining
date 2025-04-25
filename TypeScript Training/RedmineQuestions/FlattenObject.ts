type Obj={
    [key:string]:any;
}
const obj={
    name:"apoorv",
    address:{
        area:"lko"
    }
}


function flattenObject<T extends Record<string,unknown>>(obj:T):T{
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const newKey = `${key}.`
          if (typeof obj[key] === 'object' && obj[key] !== null) {
            flatten(obj[key], newKey, res);
          } else {
            res[newKey] = obj[key];
          }
        }
      }
    return obj;
}
flattenObject(obj);
export {};