function calculatorFunction(func, ...args) {
  return func(...args);
}

const area = (l, b) => l * b;
const power = (val, pow) => {
  for (let i = 1; i <= pow; i++) {
    val *= val;
  }
  return val;
};

console.log(calculatorFunction(area, 5, 4));
console.log(calculatorFunction(power, 2, 5));
