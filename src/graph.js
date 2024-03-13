class Graph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = new Set();
    }
  }

  addEdges(vertex1, vertex2) {
    if (!this.adjacentList[vertex1]) {
      this.adjacentList[vertex1] = new Set();
    }
    if (!this.adjacentList[vertex2]) {
      this.adjacentList[vertex2] = new Set();
    }
    this.adjacentList[vertex1].add(vertex2);
    this.adjacentList[vertex2].add(vertex1);
  }

  display() {
    for (let vertex in this.adjacentList) {
      console.log(`${vertex} -> ${[...this.adjacentList[vertex]]}`);
    }
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacentList[vertex1].has(vertex2) &&
      this.adjacentList[vertex2].has(vertex1)
    );
  }

  removeEdge(vertex1, vertex2) {
    this.adjacentList[vertex1].delete(vertex2);
    this.adjacentList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      return;
    }
    for (let adjacentVertex of this.adjacentList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacentList[vertex];
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdges("A", "B");
graph.addEdges("B", "C");
// graph.display();
// console.log(graph.hasEdge("A", "B"));
// console.log(graph.hasEdge("C", "A"));
graph.removeVertex("A");
graph.display();

// graph.display();
