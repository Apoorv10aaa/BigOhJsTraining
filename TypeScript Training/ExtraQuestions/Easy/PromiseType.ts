type PromiseType<P>=P extends Promise<infer T> ? T : undefined;

type ExampleType = Promise<number>

type Result = PromiseType<ExampleType>