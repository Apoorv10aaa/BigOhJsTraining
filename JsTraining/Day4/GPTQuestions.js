// Easy Questions
// 1st
const person = { name: "Apoorv", age: 22 };
const JsonPerson = JSON.stringify(person);
console.log(JsonPerson);
const personObj = JSON.parse(JsonPerson);
console.log(personObj);
// 2nd
class Car {
  constructor(year, brand) {
    this.year = year;
    this.brand = brand;
  }
  showDetails = function () {
    console.log(this.brand, this.year);
  };
}
let car = new Car(2015, "Audi");
car.showDetails();
// 3rd
const timeout = setTimeout(() => {
  console.log("Hello apoorv");
}, 2000);
// 4th
fetch("https://api.github.com/users/octocat")
  .then((res) => res.json)
  .then((data) => {
    console.log(data);
  });

// Medium
// 1st
const user = {
  name: "Apoorv",
  address: {
    city: "Noida",
    pin: 201301,
  },
};
user["first_name"] = user.name;
delete user.name;
const jsonUser = JSON.stringify(user);
console.log(jsonUser);

// Hard
// 1st
class Person {
  constructor(name) {
    this.name = name;
  }
  static info() {
    console.log("Info");
  }
  greet() {
    console.log("Hii ", this.name);
  }
}
class Student extends Person {
  constructor(name) {
    super(name);
  }
}
let s1 = new Student("apoorv");
s1.greet();
Person.info();
