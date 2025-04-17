// Easy Questions
const [a, b = 2] = [1]; // a=1

function abc(...nums) {
  let sum = nums.reduce((acc, ele) => acc + ele, 0);
  return sum;
}

const userName = "Apoorv";
const greeting = "Hello, " + userName + "!";

console.log(`Hello, ${userName}!`);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data recieved");
  }, 2000);
});

// Medium questions --

// 1st
const user = {
  name: "Apoorv",
  address: {
    city: "Noida",
    pincode: 201301,
  },
};
const {
  name,
  address: { city: myCity },
} = user;
console.log(myCity);

// 2nd
function f1(num) {
  return new Promise((resolve, reject) => {
    resolve(num);
  });
}
f1(5)
  .then((num) => num * 2)
  .then((num) => num + 10)
  .then((res) => {
    console.log(res);
  });

// 3rd
async function fakeFetch() {
  const res = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, 1000);
  });
  console.log(res);
}
fakeFetch();

// Hard Questions

// 1st
function promiseReturn(check) {
  return new Promise((resolve, reject) => {
    if (check) resolve("Data sent");
    else reject("Data invalid");
  });
}

async function f2(check) {
  try {
    const res = await promiseReturn(check);
    console.log(res);
  } catch (err) {
    console.log("Error occured-> ", err);
  }
}
f2(false);

// 2nd
async function getData() {
  const [first, ...rest] = await new Promise((resolve, reject) => {
    resolve([10, 20, 30]);
  });
  console.log("first Element", first);
}
getData();

// 3rd
function newStyle() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, 1000);
  });
}
newStyle()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
