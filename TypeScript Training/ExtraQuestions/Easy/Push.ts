type Result = Push<[1, 2], '3'> 

type Push<T extends unknown[],Key>=[...T,Key]