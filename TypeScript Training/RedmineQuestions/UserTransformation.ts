
function transformKeys(user:object,updates:object):object{
    for(let key in updates){
        if(user[key]){
            user[updates[key]]=user[key];
            delete user[key];
        }
    }
    return user;
}

const user={
    firstName:"Harsh",
    lastName:"singh",
    age:10
}
console.log(transformKeys(user,{firstName:"first",lastName:"last"}));