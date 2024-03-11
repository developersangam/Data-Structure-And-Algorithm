class Linklist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty = () => {
    return this.size === 0;
  };

  getSize = () => {
    return this.size;
  };

  prepend = (value) => {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  };

  append = (value) => {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  };

  print = () => {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = ``;
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  };

  insert = (index, element) => {
    if (index < 0 || index >= this.size) {
      return;
    }
    if (index === 0) {
      this.prepend();
    }
    const node = new Node(element);
    if (index === this.size - 1) {
      this.tail.next = node;
      this.tail = node;
      return;
    }
    if (index > 0) {
      let prev = this.head;
      let count = 0;
      while (count < index - 1) {
        prev = prev.next;
        count = count + 1;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  };

  remove = (index) => {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
      return removeNode.value;
    }
    if (index > 0) {
      let prev = this.head;
      let count = 0;
      while (count < index - 1) {
        prev = prev.next;
        count = count + 1;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
    return removeNode.value;
  };

  removeFromFront = () => {
    let value;
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      value = this.head.value;
      this.head = this.head.next;
      this.size--;
    }
    return value;
  };

  removeFromEnd = () => {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    return value;
  };

  removeValue = (value) => {
    if (this.isEmpty()) {
      return null;
    }
    let removeNode;
    if (this.head.value === value) {
      removeNode = this.head;
      this.head = this.head.next;
      return removeNode.value;
    }
    let prev = this.head;
    while (prev.next && prev.next.value != value) {
      prev = prev.next;
    }
    if (prev.next) {
      removeNode = prev.next;
      prev.next = removeNode.next;
      this.size--;
      return removeNode.value;
    }
    return null;
  };

  search = (value) => {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      return true;
    }
    let curr = this.head;
    while (curr.next) {
      if (curr.value === value) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  };

  reverse = () => {
    if (this.isEmpty()) {
      return null;
    }
    let curr = this.head;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  };
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// const list = new Linklist();
// list.prepend(10);
// list.prepend(20);
// list.prepend(40);
// list.append(10);
// list.prepend(50);
// list.insert(4, 100);
// console.log("Search", list.search(1000));
// console.log(list.removeValue(100));
// list.print();
// list.reverse();
// list.print();

module.exports = Linklist;
