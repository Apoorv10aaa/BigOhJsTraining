type X = { 
    x: { 
      a: 1
      b: 'hi'
    }
    y: 'hey'
  }

  type Todo = DeepReadonly<X>

type DeepReadonly<T extends object>= T extends object ? 
    { readonly [key in keyof T] : T[key] extends object ? 
            DeepReadonly<T[key]> :
        T[key]
    }
    : T;