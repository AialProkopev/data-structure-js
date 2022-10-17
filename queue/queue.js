// Queue
// First In First Out

// Base operatins:
// PUSH / SHIFT / LAST_ELEMENT / SIZE / IS_EMPTY

class Queue {
  constructor() {
    this.queue = {}
    this.first = 0
    this.last = 0
  }
  push(value) {
    this.queue[this.last] = value
    this.last++
  }
  // Delete First Element
  shift() {
    if (this.size() === 0) {
      return
    }
    delete this.queue[this.first]
    this.last--
    for (let key in this.queue) {
      this.queue[key - 1] = this.queue[key]
    }
    delete this.queue[this.last]
  }
  size() {
    let size = 0
    for (let key in this.queue) {
      size++
    }
    return size
  }
  lastElement() {
    if (this.size() === 0) {
      return
    }
    return this.queue[this.last - 1]
  }
  isEmpty() {
    return this.first === this.last
  }
}

let queue = new Queue()

queue.push(10)
queue.push(11)
queue.push(12)
console.log(queue)
queue.shift()
console.log(queue)
console.log(queue.size())
console.log(queue.lastElement())