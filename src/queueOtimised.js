class Stack {
  constructor() {
    this.queue = {};
    this.rear = 0;
    this.front = 0;
  }
  size = () => {
    return this.rear - this.front;
  };
  print = () => {
    console.log(this.queue);
  };
  enqueue = (element) => {
    this.queue[this.rear] = element;
    this.rear++;
  };
  dequeue = () => {
    let item = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return item;
  };

  peek = () => {
    if (this.size() > 0) {
      return this.queue[this.front];
    }
  };
}

const stack1 = new Stack();

stack1.enqueue(1);
stack1.enqueue(10);
stack1.enqueue(16);
console.log(stack1.size());
console.log(stack1.peek());
console.log(stack1.print());
stack1.dequeue();
console.log(stack1.print());
