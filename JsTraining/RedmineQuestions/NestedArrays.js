function sumNestedArray(arr) {
  const sum = arr.reduce((sum, item) => {
    if (Array.isArray(item)) {
      return sum + sumNestedArray(item); // Recursive call
    } else {
      return sum + item;
    }
  }, 0);
  return sum;
}
console.log(sumNestedArray([[1, 2, [4], [3, [0, 1, [2]]]]]));
