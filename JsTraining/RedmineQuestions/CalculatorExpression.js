function eval(exp) {
  let numStack = [];
  let opStack = [];
  let precedence = { "+": 1, "-": 1, "*": 2, "/": 2 };

  const calc = () => {
    const b = numStack.pop();
    const a = numStack.pop();
    const op = opStack.pop();
    if (op === "+") numStack.push(a + b);
    else if (op === "-") numStack.push(a - b);
    else if (op === "*") numStack.push(a * b);
    else if (op === "/") numStack.push(a / b);
  };

  let i = 0;
  while (i < exp.length) {
    let ch = exp[i];

    if (!isNaN(ch)) {
      let num = Number(ch);
      numStack.push(num);
    }

    if (ch == "(") {
      // if opening bracket, push in op stack
      opStack.push(ch);
    } else if (ch == ")") {
      // if closing brakcet, solve till you reach the same opening bracket
      while (opStack[opStack.length - 1] != "(") {
        calc();
      }
      opStack.pop();
    } else if (ch in precedence) {
      // if an operator then solve till the top of opStack has a operator with greater or equal precendece
      while (precedence[opStack[opStack.length - 1]] >= precedence[ch]) {
        calc();
      }
      opStack.push(ch);
    }
    i++;
  }
  while (opStack.length) {
    // for remaining
    calc();
  }
  return numStack.pop();
}
console.log(eval("1+(2+3)*4-10/2"));
