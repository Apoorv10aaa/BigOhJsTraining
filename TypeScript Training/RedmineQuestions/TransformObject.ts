type TransformObject<Type,val>=Type extends object?{
    [key in keyof Type as `${val}${key}`]:TransformObject<Type[key],val>
}:{

}