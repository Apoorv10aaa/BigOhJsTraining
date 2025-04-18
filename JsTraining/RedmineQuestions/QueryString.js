function queryString(obj, url) {
  url += "?";
  for (let key in obj) {
    url += key + "=" + obj[key] + "&";
  }
  return url.slice(0, url.length - 1);
}
const obj = {
  keyOne: "value One",
  keyTwo: "value Two",
  keyThree: "value Three",
};

const url = "https://localhost:400";
console.log(queryString(obj, url));
