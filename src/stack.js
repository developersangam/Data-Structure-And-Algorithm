class Stack {
  constructor() {
    this.stack = [];
  }
  size = () => {
    return this.stack.length;
  };
  print = () => {
    return this.stack;
  };
  insert = (element) => {
    this.stack.push(element);
  };
  remove = () => {
    if (this.size() > 0) {
      this.stack.pop();
    }
  };

  peek = () => {
    if (this.size() > 0) {
      return this.stack[this.stack.length - 1];
    }
  };
}

const stack1 = new Stack();

stack1.insert(1);
stack1.insert(10);
stack1.insert(16);
console.log(stack1.size());
console.log(stack1.peek());
console.log(stack1.print());
stack1.remove()
console.log(stack1.print())
