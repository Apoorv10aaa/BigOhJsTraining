class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    let listeners = this.events[event] || [];
    listeners.push(listener);
    this.events[event] = listeners;
  }

  emit(event, ...args) {
    let listeners = this.events[event];
    for (let f of listeners) {
      f(args);
    }
  }

  off(event, listener) {
    let listeners = this.events[event];
    const ind = listeners.indexOf(event);
    listeners.splice(ind, 1);
  }
}
const emitter = new EventEmitter();
const greet = (name) => console.log(`Hello, ${name}`);
emitter.on("greet", greet);
emitter.emit("greet", "Alice");
emitter.off("greet", greet);
emitter.emit("greet", "Bob");
