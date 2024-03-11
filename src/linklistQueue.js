const Linklist = require("./linklistWithTail");
class LinklistQueue {
  constructor() {
    this.list = new Linklist();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.removeFromEnd();
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

const queue = new LinklistQueue();
console.log(queue.isEmpty());
queue.enqueue(20);
queue.enqueue(10);
queue.enqueue(30);
console.log(queue.getSize());
queue.print();
console.log(queue.dequeue());
queue.print();
console.log(queue.peek());
