type CustomPick<T,K>={
    [key in keyof T as key extends K ? key : never]:T[key];
}

interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  type TodoPreview = CustomPick<Todo, 'title' | 'completed'>
  
  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }