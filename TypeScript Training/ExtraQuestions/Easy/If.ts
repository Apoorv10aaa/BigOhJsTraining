type If<T extends boolean,U,V>= T extends true ? U :V

type A = If<true, 'a', 'b'>
type B = If<false, 'a', 'b'>