class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  add(value) {
    this.root = addWithin(this.root, value)

    function addWithin(node, value) {
      if (!node) {
        return new Node(value)
      }
      if (value === node.value) {
        return node
      }
      if (value < node.value) {
        node.left = addWithin(node.left, value)
      } else {
        node.right = addWithin(node.left, value)
      }

      return node
    }
  }

  has(value) {
    return searchWithin(this.root, value)

    function searchWithin(node, value) {
      if (!node) {
        return false
      }
      if (value === node.value) {
        return true
      }
      return value < node.value
        ? searchWithin(node.left, value)
        : searchWithin(node.right, value)
    }
  }

  remove(value) {
    return removeNode(this.root, value)

    function removeNode(node, value) {
      if (!node) {
        return null
      }
      if (value < node.value) {
        node.left = removeNode(node.left, value)
        return node
      } else if (value > node.value) {
        node.right = removeNode(node.right, value)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }

        // both children exists
        let minFromRight = node.right

        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }

        node.value = minFromRight.value

        node.right = removeNode(node.right, minFromRight.value)

        return node
      }
    }
  }

  min() {
    if (!this.root) {
      return undefined
    }

    let node = this.root
    while (node.left) {
      node = node.left
    }

    return node.value
  }

  max() {
    if (!this.root) {
      return undefined
    }

    let node = this.root
    while (node.right) {
      node = node.right
    }

    return node.value
  }

  leftTraverse(callback) {
    doLeft(this.root, callback)

    function doLeft(node, callback) {
      if (node) {
        doLeft(node.left, callback)
        callback(node.value)
        doLeft(node.right, callback)
      }
    }
  }

  rightTraverse(callback) {
    doRight(this.root, callback)

    function doRight(node, callback) {
      if (node) {
        doRight(node.right, callback)
        callback(node.value)
        doRight(node.left, callback)
      }
    }
  }
}
