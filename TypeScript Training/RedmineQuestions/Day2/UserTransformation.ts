function transformKeys(user:User,updates:Update):User{
    for(let key in updates){
        if(user[key]){
            user[updates[key]]=user[key];
            delete user[key];
        }
    }
    return user;
}

type User={
    firstName:string,
    lastName:string,
    age:number
}
const user={
    firstName:"Harsh",
    lastName:"singh",
    age:10
}
type Update=Partial<Record<keyof User,string>>;

const update={firstName:"first",lastName:"last"} satisfies Update;

let newUSer= transformKeys(user,update);
console.log(newUSer);
export { };