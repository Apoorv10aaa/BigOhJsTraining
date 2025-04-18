class Calc {
  static sum(...nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
  }
  static prod(...nums) {
    return nums.reduce((acc, curr) => acc * curr, 1);
  }
  static substract(a, b) {
    return a - b;
  }
  static divide(a, b) {
    return a / b;
  }
}
