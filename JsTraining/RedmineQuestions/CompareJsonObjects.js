function assertObjectEqual(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Passed");
  } else {
    console.log(`Expected ${expected} got ${actual}`);
  }
}
var expected = { foo: 5, bar: 6 };
var actual = { foo: 5, bar: 7 };
assertObjectEqual(actual, expected);
