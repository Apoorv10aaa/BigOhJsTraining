type stringAndNumber= string | number;

let a="hii" as stringAndNumber; // tells what it is exlicitly
let b="hello" satisfies stringAndNumber; // tell to infer on own

a.toUpperCase();
b.toUpperCase();

export {};
