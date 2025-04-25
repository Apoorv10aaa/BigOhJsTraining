type User={
    name:string,
    id:{
        strt:number
    }
}
type NullableProperties<Type>=Type extends object?{
    [key in keyof Type]:NullableProperties<Type[key]>;
}:Type|null;

type NullableUser=NullableProperties<User>;

let user:NullableUser={
    name:"aoodk",
    id:{
        strt:null
    }
}
export {};