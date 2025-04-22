function deepClone(obj) {
  let clone = { ...obj };
  for (key in obj) {
    if (typeof obj[key] === "object") {
      console.log("object");
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}
const obj = {
  p1: 1,
  obj1: {
    p2: 2,
  },
};
const clone = deepClone(obj);
console.log(clone);
console.log(obj);

console.log(obj === clone);
