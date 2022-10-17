// Stack
// Last In First Out

// Base operatins:
// PUSH / POP / TOP / SIZE / IS_EMPTY

class Stack {
  constructor() {
    this.array = []
  }
  push(value) {
    this.array.push(value)
  }
  pop() {
    this.array.pop()
  }
  size() {
    return this.array.length
  }
  top() {
    return this.array[this.size() - 1]
  }
  isEmpty() {
    return this.size() === 0
  }
}

let stack = new Stack()

console.log(stack)
stack.push(1)
console.log(stack)
stack.push(2)
console.log(stack)
stack.pop()
console.log(stack)
console.log(stack.size())
console.log(stack.top())
console.log(stack.isEmpty())
