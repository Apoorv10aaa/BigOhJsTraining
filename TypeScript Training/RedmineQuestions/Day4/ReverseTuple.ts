type SimpleTuple=[number,string,boolean];

const arr:SimpleTuple=[10,"hii",true];

type ReverseTuple<T>=T extends [infer First, ...infer Rest] ? [...ReverseTuple<Rest>,First] : [];

function reverseTuple<T extends unknown[]>(tuple:T):ReverseTuple<T>{
    return tuple.reverse() as ReverseTuple<T>;
}

console.log(reverseTuple(arr));