function largestDifference(arr) {
  let min = arr.reduce((acc, curr) => {
    if (acc > curr) {
      return curr;
    } else {
      return acc;
    }
  }, arr[0]);
  let max = arr.reduce((acc, curr) => {
    if (acc > curr) {
      return acc;
    } else {
      return curr;
    }
  }, arr[0]);

  return max - min;
}

console.log(largestDifference([10, 3, 5, 1, 9]));
console.log(largestDifference([-10, 0, 10, 20]));
