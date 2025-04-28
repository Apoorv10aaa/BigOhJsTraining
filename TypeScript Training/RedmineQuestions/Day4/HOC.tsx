import React from 'react';

function withLoader<P>(Component:React.ComponentType<P>){
    function CompWithLoader(props:P & {loading:boolean}){
        if(props.loading){
            return <div>Loading....</div>
        }else{
            return Component;
        }
    }
    return CompWithLoader;
}
type User={
    name:string
}
let user={
    name:"Apoorv"
}
function UserDetails(user:User){
    return <div>UserName:${user.name}</div>
}

const UserDetailsWithLoader=withLoader(UserDetails);