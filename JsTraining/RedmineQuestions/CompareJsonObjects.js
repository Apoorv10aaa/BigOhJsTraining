function assertObjectEqual(actual, expected) {
  for (let key in actual) {
    if (!expected[key] || !expected[key] === actual[key]) {
      console.log("Expected", expected, "got", actual);
      return;
    }
    console.log("Passed");
  }
}
