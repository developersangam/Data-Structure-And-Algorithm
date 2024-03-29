class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNewNode(this.root, newNode);
    }
  }

  insertNewNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNewNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNewNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    // console.log(root.value,value)
    if (this.isEmpty()) {
      return false;
    } else {
      if (root.value === value) {
        // console.log("dad", root.value, value);
        return true;
      }
      if (value > root.value) {
        if (root.right === null) {
          return false;
        } else {
          return this.search(root.right, value);
        }
      } else {
        if (root.left === null) {
          return false;
        } else {
          return this.search(root.left, value);
        }
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    }
    return this.min(root.left);
  }

  max(root) {
    if (!root.right) {
      return root.value;
    }
    return this.max(root.right);
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new BinarySearchTree();

bst.insert(100);
bst.insert(10);
bst.insert(200);
bst.insert(3);
bst.insert(7);
bst.insert(2000);
// console.log(bst.search(bst.root, 20131));
// console.log(bst.search(bst.root, 200));
// bst.inOrder(bst.root);
// bst.preOrder(bst.root);
// bst.postOrder(bst.root);
// bst.levelOrder();
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));
