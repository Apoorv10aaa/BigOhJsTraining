class CalcWithVarArgs {
  static addition(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
  }
  static multiplication(...args) {
    return args.reduce((acc, curr) => acc * curr, 1);
  }
}
