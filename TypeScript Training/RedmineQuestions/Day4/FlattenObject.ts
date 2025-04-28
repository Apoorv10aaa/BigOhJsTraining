

const data = {
  user: {
    id: 123,
    name: "John Doe",
    addresses: [
      {
        street: "123 Main St",
        city: "Wonderland",
        postalCode: 12345,
      },
      {
        street: "456 Elm St",
        city: "Oz",
        postalCode: 67890,
      },
    ],
    settings: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
      },
    },
  },
};
const data1={
  a:1,
  b:{
    c:2,
    d:3
  }
}

function flattenObject<T extends object>(obj:T):Record<string,number|boolean|string>{
  const result:Record<string,number|boolean|string>={};
  for(let key in obj as (keyof T)[]){
    let value=obj[key];
    let newKey=key;

    if(typeof value==='object' && value!=null){
      if(Array.isArray(value)){
        value.forEach((ele,index)=>{
          let tempObj=flattenObject(ele);
          for(let k in tempObj){
            result[`${newKey}.${index}.${k}`]=tempObj[k];
          }
        })
      }else{
        let tempObj=flattenObject(value);
        for(let k in tempObj){
          result[`${newKey}.${k}`]=tempObj[k];
        }
      }
    }else{
      result[newKey]=value;
    }
  }
  return result;
}
const flattenedObj = flattenObject(data);
console.log(flattenedObj);
export {};