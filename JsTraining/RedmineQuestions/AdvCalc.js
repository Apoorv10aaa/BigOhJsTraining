class AdvCalc {
  static validateNonNegative(n, label = "value") {
    if (n < 0) return "negative";
    return null;
  }

  // square
  static square(n) {
    return n * n;
  }

  // square Root
  static squareRoot(n) {
    const error = this.validateNonNegative(n, "Square Root input");
    if (error) return error;
    return Math.sqrt(n);
  }

  // log
  static log(n) {
    if (n === 0) return "invalid";
    return Math.log10(n);
  }

  static sin(deg) {
    const rad = (Math.PI / 180) * deg;
    return Math.sin(rad);
  }

  static cos(deg) {
    const rad = (Math.PI / 180) * deg;
    return Math.cos(rad);
  }

  static tan(deg) {
    const rad = (Math.PI / 180) * deg;
    return Math.tan(rad);
  }

  static power(x, y) {
    return Math.pow(x, y);
  }

  static areaOfCircle(radius) {
    const error = this.validateNonNegative(radius, "Radius");
    if (error) return error;
    return Math.PI * radius * radius;
  }
}
console.log(AdvCalc.areaOfCircle(5));
console.log(AdvCalc.tan(90));
console.log(AdvCalc.log(10));
