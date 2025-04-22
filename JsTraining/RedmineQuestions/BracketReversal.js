function minReversals(expr) {
  if (expr.length % 2 !== 0) return -1;

  let stack = [];

  for (let ch of expr) {
    if (ch === "{") {
      stack.push(ch);
    } else {
      if (stack.length && stack[stack.length - 1] === "{") {
        stack.pop(); // matched
      } else {
        stack.push(ch); // unmatched }
      }
    }
  }
  let open = 0,
    close = 0;
  for (let ch of stack) {
    if (ch === "{") open++;
    else close++;
  }

  return Math.ceil(open / 2) + Math.ceil(close / 2);
}

console.log(minReversals("{{{{"));
