const Linklist = require("./linklistWithTail");
class LinklistStack {
  constructor() {
    this.list = new Linklist();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  print() {
    this.list.print();
  }

  peek() {
    return this.list.head.value;
  }

  getSize() {
    return this.list.size;
  }

  isEmpty() {
    return this.list.isEmpty();
  }
}

const stack = new LinklistStack();
console.log(stack.isEmpty());
stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.getSize());
stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.peek());
