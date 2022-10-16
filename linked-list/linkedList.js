class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.HEAD = null
    this.length = 0
  }

  add(value) {
    if (this.length === 0) {
      this.HEAD = new Node(value)
    } else {
      let current = this.HEAD
      while (current.next) {
        current = current.next
      }
      current.next = new Node(value)
    }
    this.length++
  }

  insert(position, value) {
    if (position < 0 || position > this.length) return false

    let node = new Node(value)

    if (position === 0) {
      node.next = this.HEAD
      this.HEAD = node
    } else {
      let current = this.HEAD
      let prev = null
      let index = 0

      while (index < position) {
        prev = current
        current = current.next
        index++
      }

      prev.next = node
      node.next = current
    }
    this.length++
  }

  get(position) {
    if (position < 0 || this.length >= position) return

    let current = this.HEAD
    let index = 0

    while (index < position) {
      current = current.next
      index++
    }
    return current.value
  }

  removeAt(position) {
    if (position < 0 || position >= this.length) return

    let current = this.HEAD

    if (position === 0) {
      this.HEAD = current.next
    } else {
      let prev = null
      let index = 0

      while (index < position) {
        prev = current
        current = current.next
        index++
      }
      prev.next = current.next
    }
    this.length--
    return current.value
  }

  remove(element) {
    this.removeAt(this.indexOf(element))
  }

  indexOf(element) {
    let current = this.HEAD
    let index = 0

    while (current) {
      if (element === current) {
        return index
      }
      current = current.next
      index++
    }

    return -1
  }

  size() {
    return this.length
  }

  isEmpty() {
    return this.length === 0
  }

  print() {
    let current = this.HEAD

    while (current) {
      console.log(current)
      current = current.next
    }
  }
}
