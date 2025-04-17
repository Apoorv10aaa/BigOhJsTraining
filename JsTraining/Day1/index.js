let a = 5;
let b = a;
b = 10;
console.log("a", a); // a=5 not affected beacuse b stores just value

let obj1 = { name: "Apoorv" };
let obj2 = obj1;
obj2.name = "JS Dev";
console.log("object 1", obj1.name); // affected because now reference is passed

console.log("type of null", typeof null); // legacy bug in js

console.log("[] == false ", [] == false); // true becoz of type coercion -> []->""->0
console.log("''==false", "" == false); // true becoz of type coercion
console.log("[]===false ", [] === false); // false becoz compare the type as well
console.log("{}==false", {} == false); // false

let c = { name: "Apoorv" };
let d = { ...a }; // spreads keys/values into a new object
d.name = "React Dev";
console.log("c", c.name); // Apoorv

console.log("e", e); // undefined
var e = 10;

// console.log(f); //  ReferenceError
// let f = 10;

console.log("3+'33'", 3 + "33"); // concate string
console.log("33-'3'", 33 - "3"); // type coercion to number ->  30
console.log("3/'10'", 3 / "10"); // 0.3

console.log("5 || false", 5 || false); // 5
console.log("0 || false", 0 || false); // false
console.log("false && 0", false && 0); // false
console.log("'hii' && 1", "hii" && 1); // 1
console.log("!'hi'", !"hi"); // false
console.log("!!'hi'", !!"hi"); // true
console.log("!![]", !![]); // return boolean value of [] i.e true
console.log("null ?? 'hello'", null ?? "hello"); // hello
console.log("0 ?? 'hello'", 0 ?? "hello"); // 0

const arr = ["a", "b", "c"];
for (const letter of arr) {
  console.log("leter of arr", letter); // takes values one by one
}

const obj = { a: 1, b: 2 };
for (let key in obj) {
  console.log("key and obj", key, obj[key]); // takes properties one by one
}

for (var i = 0; i < 3; i++) {
  // var is polluted due to function scope
  setTimeout(() => console.log(i), 1000);
} // output 3 3 3

let g = "2";
while (g > 0) {
  console.log("while", typeof g, g);
  g--;
}

const greet = (name) => `Hello, ${name}`; // arrow function
console.log(greet("Apoorv"));

// abc(); // hoisted and this of object that call them here node object
function abc() {
  console.log(this);
}

const object = {
  user: "Apoorv",
  xyz: function () {
    console.log("normal function scope", this.user); // undefined
  },
};
object.xyz();

function greet1(name = "Guest") {
  return `Hello, ${name}`; // default parameter
}

function sum(...nums) {
  // rest parameter , can take any no. of parameter stores them in array
  return nums.reduce((a, b) => a + b, 0);
}

function multiplier(factor) {
  // higher order function
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log("hof", double(5));

function outer() {
  // closures -> inner function remembers the its lexical scope
  let count = 5;
  return function inner() {
    count++;
    return count;
  };
}

const inner = outer();
console.log("closure", inner()); // 6
