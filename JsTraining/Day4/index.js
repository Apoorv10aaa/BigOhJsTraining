let jsonString = '{"name": "Apoorv", "age": 22}';
let user = JSON.parse(jsonString);
console.log(user.name); // Apoorv

jsonString = JSON.stringify(user);
console.log(jsonString);

user.name = "Srivastava";
console.log(user);

const users = `[
    {"name": "Apoorv", "age": 22},
    {"name": "John", "age": 25}
  ]`;

const parsedUsers = JSON.parse(users);
console.log(parsedUsers[0].name);

const now = new Date();
console.log(now.toISOString()); // "2025-04-18T12:00:00.000Z"
console.log(now.getFullYear()); // 2025

const timeoutId = setTimeout(() => console.log("Hello after 2 sec"), 2000);

console.log(now.getTime());

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
