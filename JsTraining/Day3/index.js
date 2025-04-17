const { CommandStartedEvent } = require("mongodb");

const arr1 = [10, 20];
const [a, b] = arr1;
console.log("a and b", a, b); // a stores 10 and b stores 20

const arr2 = [1, 2, 3];
const [c, d] = arr2;
console.log("c and d-", c, d); // elements are taken by index

const obj1 = { user: "Apoorv", age: 20 };
const { userName, age } = obj1;
console.log("user and age", userName, age); // undefined and age -> matching variables with property names(pattern matching)

function greet({ name, age }) {
  console.log(`Hello ${name}, age ${age}`);
}
greet({ name: "Apoorv", age: 22 }); // clean way of using the arguments passed in a function

const scores = [98, 95, 91, 88, 76];
const [top1, top2, ...rest] = scores; // rest operator collects all remainning values

console.log(top1); // 98
console.log(top2); // 95
console.log(rest); // [91, 88, 76]

const arr3 = [1, 2];
const arr4 = [3, 4];
const merged = [...arr3, ...arr4]; // spread operator
console.log("merged by spread", merged);

function logAll(...args) {
  // rest operator
  console.log("arguments gatherd", args); // array of all arguments
}
logAll(1, 2, 3, 4);

const obj2 = {
  a: 1,
  b: {
    p1: 1,
  },
};
function restCheck({ ...argObj }) {
  // argObj is a shallow copy
  argObj.b.p1 = 10;
  console.log("Gathered object by rest", argObj);
}
restCheck(obj2);
console.log("Rest makes a shallow copy", obj2);

const greet2 = (name) => {
  // Arrow function with template literals
  console.log(`Hello, ${name}`);
};
greet2("Apoorv");

console.log("Start");
setTimeout(() => {
  console.log("Executed after 2 seconds"); // goes to callback queue
}, 1000);
console.log("End");

function anAsyncJob(job) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = "JobDone";
      if (job) {
        resolve(data);
      } else {
        reject("Job not done");
      }
    }, 2000);
  });
}

anAsyncJob(false) // .then chaining way
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

async function doAsyncJob() {
  // by async await
  try {
    const data = await anAsyncJob(true);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
doAsyncJob();

async function getMyGithubData() {
  try {
    const res = await fetch("https://api.github.com/users/apoorv");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getMyGithubData();
