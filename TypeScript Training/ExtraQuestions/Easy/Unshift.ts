type Result = Unshift<[1, 2], 0> 

type Unshift<T extends unknown[],Val>=[Val,...T];