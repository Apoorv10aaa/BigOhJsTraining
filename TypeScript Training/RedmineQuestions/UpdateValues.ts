type Data={
    name:string,
    age:number
    address:{
        city:string,
        zip:number,
        location:{
            country:string
        }
    }
    isActive:boolean
}
const obj:Data = {
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

function updateValueWithPrefix<T extends object>(data:T,prefix:string):T{
    if(typeof data==='object' && data!=null){
        for(let key in data){
            if(typeof data[key]==='object'){
                updateValueWithPrefix(data[key],prefix);
            }else if(typeof data[key]==='string'){
                data[key]=prefix+data[key];
            }
        }
    }
    return data;
}
console.log(updateValueWithPrefix(obj,"Hello "));

export {};