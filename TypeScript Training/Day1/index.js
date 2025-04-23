"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = "Apoorv";
// a=7
console.log(a);

var b; // get value=> any because of type inference
function value() {
  return "string";
}
b = value(); // function could return any type and b stores it.

function addTwo(num) {
  return num + 2;
  // return "hii";
}
function login(name, email, isPaid) {
  if (isPaid === void 0) {
    isPaid = false;
  }
}
login("apoorv", "email");
var val; // any type
val = addTwo(7);
var getData = function (url) {
  return "data";
};
function logErr(err) {
  console.log(err);
}
function handleErr(err) {
  throw new Error(err);
}
function createUser(_a) {
  var string = _a.name,
    number = _a.age;
  // console.log(name);
  return { name: "apoorv" };
}
console.log(createUser({ name: "hhh", age: 10 }));
// starnge behaviour of ts
var user1 = { name: "jjj", age: 17, email: "hfgduen" };
console.log(createUser(user1));
function loginUser(u) {
  return u;
}
console.log(loginUser({ name: "hfhf", age: 10 }));
var arr = [];
var arr2 = [];
var arr3 = []; // all ways to define an array
var d = 10; // a number
d = "10"; // a string
function getDataFromDB(id) {
  // id.toLowerCase()
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id += 1;
  }
}
// tuple
var rgb = [255, 255, 255];
var arr4 = [1, 2, "3"]; // many type array
// problem in tuple
rgb.push(255);
console.log(rgb);
