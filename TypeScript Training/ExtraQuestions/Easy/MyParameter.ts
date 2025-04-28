
type MyParameters<F>= F extends (...args:infer U) => any ? U : undefined

const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo>