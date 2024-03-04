class Queue {
  constructor() {
    this.queue = [];
  }
  size = () => {
    return this.queue.length;
  };
  print = () => {
    return this.queue;
  };
  enqueue = (element) => {
    this.queue.push(element);
  };
  dequeue = () => {
    if (this.size() > 0) {
      this.queue.shift();
    }
  };

  peek = () => {
    if (this.size() > 0) {
      return this.queue[0];
    }
  };
}

const queue1 = new Queue();

queue1.enqueue(1);
queue1.enqueue(10);
queue1.enqueue(16);
console.log(queue1.size());
console.log(queue1.peek());
console.log(queue1.print());
queue1.dequeue();
console.log(queue1.print());
