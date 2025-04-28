
type Concat<T extends unknown[],S extends unknown[]>=[...T,...S];

type Result = Concat<[1], [2]> 