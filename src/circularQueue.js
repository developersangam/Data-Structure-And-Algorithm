class CircularQueue {
  constructor() {
    this.head = 0;
    this.tail = 0;
    this.length = 4;
    this.items = {};
  }

  enqueue = (element) => {
    console.log(this.size() === this.length);
    if (this.size() === this.length) {
      return "Queue is full";
    }
    this.items[this.tail] = element;
    if (this.tail === this.length) {
      this.tail = 0;
    } else {
      this.tail++;
    }
  };

  

  size = () => {
    return this.tail - this.head;
  };

  isFull = () => {
    if (this.size() === this.length) {
      return true;
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

const cq1 = new CircularQueue();

cq1.enqueue(1);
cq1.enqueue(1);
cq1.enqueue(1);
cq1.enqueue(1);
cq1.enqueue(1);
cq1.enqueue(1);
console.log(cq1.size());
console.log(cq1.isFull());
