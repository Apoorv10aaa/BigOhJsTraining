type CustomReadOnly<T>={
    readonly [key in keyof T]:T[key];
}

interface Todo {
    title: string
    description: string
  }
  
  const todo: CustomReadOnly<Todo> = {
    title: "Hey",
    description: "foobar"
  }
  
  todo.title = "Hello"