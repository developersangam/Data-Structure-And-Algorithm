//In this implementation hashing collision problem is also solved

class HashTableWithObject {
  constructor(size) {
    this.items = {};
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.items[index]) {
      this.items[index] = {};
    }
    this.items[index][key] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.items[index] ? this.items[index][key] : undefined;
  }

  display() {
    for (const property in this.items) {
      console.log(`${property}: ${this.items[property]}`);
    }
  }

  remove(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      delete this.table[index][key];
    }
  }
}

const table = new HashTableWithObject(50);
table.set("name", "Bruce");
table.set("age", 25);
console.log(table.get("name"));
table.set("amne", "Lara");
console.log(table.get("amne"));

// table.display();
