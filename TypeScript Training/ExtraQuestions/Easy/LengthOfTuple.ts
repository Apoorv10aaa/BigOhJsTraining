type TupleLength<T extends readonly any[]>=T["length"];

type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type teslaLength = TupleLength<tesla> 