type User={
    name:string,
    id:{
        strt:string | null;
    }
}
type DefinedProperties<Type>=Type extends object? {
    [key in keyof Type as Type[key] extends null|undefined ? never : key ]:DefinedProperties<Type[key]>
}: NonNullable<Type>;

type DefinedUser=DefinedProperties<User>;
let user:DefinedUser={
    name:"apoorv",
    id:{
        strt:"hdh"
    }
}
export {}