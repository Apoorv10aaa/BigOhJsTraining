class CalcWithValidation {
  static validateArgs(expectedCount, args, operation) {
    if (args.length !== expectedCount) {
      return "invalid args";
    }

    for (let i = 0; i < args.length; i++) {
      const val = args[i];

      if (typeof val === "undefined") {
        return "invalid";
      }

      if (typeof val !== "number" || isNaN(val)) {
        return "invalid";
      }
    }

    if (operation === "divide" && args[1] === 0) {
      return `division by zero is not allowed.`;
    }

    return null;
  }

  static sum(...nums) {
    const error = this.validateArgs(nums.length, nums, "sum");
    if (error) return error;
    return nums.reduce((acc, curr) => acc + curr, 0);
  }

  static prod(...nums) {
    const error = this.validateArgs(nums.length, nums, "prod");
    if (error) return error;
    return nums.reduce((acc, curr) => acc * curr, 1);
  }

  static substract(a, b) {
    const error = this.validateArgs(2, [a, b], "substract");
    if (error) return error;
    return a - b;
  }

  static divide(a, b) {
    const error = this.validateArgs(2, [a, b], "divide");
    if (error) return error;
    return a / b;
  }
}
