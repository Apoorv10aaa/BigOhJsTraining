function manipulation2(jsonObj) {
  let res = {};
  for (let key in jsonObj) {
    if (typeof jsonObj[key] === "object") {
      let obj = manipulation2(jsonObj[key]);
      for (let k in obj) {
        res[key + "." + k] = obj[k];
      }
    } else {
      res[key] = jsonObj[key];
    }
  }
  return res;
}
const obj = {
  keyOne: "value One",
  keyTwo: "value Two",
  keyThree: "value Three",
  keyFour: {
    keyA: true,
    keyB: false,
    keyC: {
      keyCOne: "key C one value",
      keyCTwo: "key C two value",
      keyCThree: 1234,
    },
  },
};
console.log(manipulation2(obj));
