type TupleToUnion<T extends readonly unknown[]>=T[number];

type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> 