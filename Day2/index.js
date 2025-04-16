console.log("a", a); // undefined because of var hoisting
var a = 10;

func1(); // hoisting of functions
function func1() {
  console.log("hoisting of functions");
}

// console.log(obj1.user); // object is declared but not given the value so, error.
var obj1 = {
  user: "apoorv",
};

function outer() {
  // inner function has the lexical scope of the outer function
  let count = 5;
  return function inner() {
    count++;
    console.log(count);
  };
}
let inner = outer();
console.log("closure example", inner()); // 6

function func2() {
  if (true) {
    let b = 10;
    var c = 10;
  }
  console.log("c", c);
  // console.log("b", b); // error here because b is let and has the scope of if block
}
func2();

function showArgs() {
  console.log("passed arguments", arguments); // argument object
  let args = [...arguments];
  console.log("when i use rest parameter", args);
}
showArgs(1, 2, 3);

let d = 5;
let e = a;
e = 10;
console.log("d", d); // d=5 not affected beacuse e stores just value

let obj3 = { name: "Apoorv" };
let obj4 = obj3;
obj4.name = "JS Dev";
console.log("object 3", obj3.name); // affected because now reference is passed

let obj5 = { name: "Apoorv" };
function reset(o) {
  o = { name: "New" }; // new reference
}
reset(obj5);
console.log("function reference passing-", obj5.name); // "Apoorv" remains unchanged because when o=something
// causes it to point somewhere else, but if we change current refernce it reflects in original array.

let fruits = ["apple", "banana", "cherry"]; // array creation

console.log("fruits[0]-", fruits[0]); // "apple"
console.log("fruits last element-", fruits[fruits.length - 1]); // "cherry"
console.log("access out of bound index-", fruits[10]); // undefined (no error)

fruits.push("Grapes", "Guawa");
console.log("fruits pushed", fruits);
fruits.pop(); // removes last element and returns the removed element
fruits.splice(2, 2, "berry", "tomato");
console.log("fruits spliced", fruits);

console.log("Slice of arr", fruits.slice(1, 10));
console.log("reverse the array", fruits.reverse());

const arr = [1, 2, 3];
arr.forEach((ele, index) => {
  console.log("Array Element", index, ele);
});

let newArr = arr.map((ele) => ele * 2);
console.log(newArr);

newArr = arr.filter((ele) => ele % 2 == 0);
console.log(newArr);

console.log(
  "reduced value- ",
  arr.reduce((acc, ele) => acc + ele, 0)
);

console.log(
  "find a match",
  arr.find((ele) => ele > 2)
);
console.log(
  "find index that match",
  arr.findIndex((ele) => ele > 2)
);

fruits.push("tomato", "apple", "tomato");
// better use of reduce
const countOfFruits = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log("occurence of fruits", countOfFruits);

const user = {
  // object creation
  name: "Apoorv",
  age: 22,
  address: {
    area: "Lucknow",
    pin: 226017,
  },
  isDeveloper: true,
  greet: function () {
    console.log(`Hi, I’m ${this.name}`);
  },
};
console.log("Object-", user);

const person = new Object();
person.name = "Apoorv";
person.age = 22;
console.log("person object-", person);

console.log("Dot", user.name); // Apoorv: this is dot notation
let key = "name";
console.log("Bracket", user[key]); // Apoorv: bracket notation

console.log(user.location?.lat?.val); // safe access, will not throw error even if location object is not present

let userShallowCopy = { ...user };
userShallowCopy.name = "Amit";
userShallowCopy.address.pin = 201310; // changes the original nested object
console.log("After changes in shallow copy-", user);

console.log("keys", Object.keys(user));
console.log("entries", Object.entries(user));
console.log("has own", Object.hasOwn(user, "name"));

let frozenUser = Object.freeze(user);
frozenUser.name = "Amit"; // this is ignored
console.log("frozen User", frozenUser);
