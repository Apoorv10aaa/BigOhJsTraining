function assertObjectEqual(actual, expected) {
  for (let key in actual) {
    if (!expected[key] || !expected[key] === actual[key]) {
      console.log("Expected", expected, "got", actual);
      return;
    }
  }
  console.log("Passed");
}
var expected = { foo: 5, bar: 6 };
var actual = { foo: 5, bar: 7 };
assertObjectEqual(actual, expected);
