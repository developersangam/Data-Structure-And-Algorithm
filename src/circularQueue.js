class CircularQueue {
  constructor(capacity) {
    this.head = 0;
    this.tail = 0;
    this.capacity = capacity;
    this.length = 0;
    this.items = {};
  }

  enqueue = (element) => {
    if (this.length != this.capacity) {
      this.items[this.tail] = element;
      this.tail = (this.tail + 1) % this.capacity;
      this.length++;
      console.log(`Enqueued ${element}`);
    } else {
      console.log("Queue is full");
    }
  };

  dequeue = () => {
    if (!this.isEmpty()) {
      const element = this.items[this.front];
      delete this.items[this.front];
      this.front = (this.front + 1) % this.capacity;
      this.length--;
      console.log(`${element} is removed`);
    } else {
      console.log(`Queue is empty`);
    }
  };

  size = () => {
    return this.length;
  };

  isFull = () => {
    if (this.size() === this.capacity) {
      return true;
    } else {
      return false;
    }
  };

  isEmpty = () => {
    if (this.size() === 0) {
      return true;
    }
  };

  peek = () => {
    if (this.size() > 0) {
      return this.items[this.head];
    }
  };

  print = () => {
    console.log(this.items);
  };
}

const cq1 = new CircularQueue(4);

cq1.enqueue(1);
cq1.enqueue(1);
cq1.enqueue(1);
cq1.enqueue(1);
cq1.enqueue(1);
cq1.dequeue();
cq1.dequeue();
cq1.dequeue();
cq1.dequeue();
cq1.dequeue();
cq1.enqueue(1);
console.log(cq1.size());
console.log(cq1.isFull());
