// Clase Grafo (Graph)
class Graph {
  constructor() {
    this.vertices = {};
  }

  // Método agregarVertice (addVertex): agrega un nuevo vértice al grafo
  addVertex(vertex) {
    if (!this.vertices[vertex]) {
      this.vertices[vertex] = [];
    }
  }

  // Método agregarArista (addEdge): agrega una arista entre dos vértices
  addEdge(vertex1, vertex2) {
    if (!this.vertices[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.vertices[vertex2]) {
      this.addVertex(vertex2);
    }
    this.vertices[vertex1].push(vertex2);
    this.vertices[vertex2].push(vertex1); // Para un grafo no dirigido
  }

  // Método eliminarArista (removeEdge): elimina una arista entre dos vértices
  removeEdge(vertex1, vertex2) {
    this.vertices[vertex1] = this.vertices[vertex1].filter(
      (v) => v !== vertex2
    );
    this.vertices[vertex2] = this.vertices[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  // Método eliminarVertice (removeVertex): elimina un vértice y sus aristas asociadas
  removeVertex(vertex) {
    while (this.vertices[vertex].length) {
      const adjacent = this.vertices[vertex].pop();
      this.removeEdge(vertex, adjacent);
    }
    delete this.vertices[vertex];
  }

  // Método recorridoDFS (DFS): recorre el grafo en profundidad (Depth-First Search)
  DFS(start) {
    const visited = {};
    this.DFSUtil(start, visited);
  }

  DFSUtil(vertex, visited) {
    visited[vertex] = true;
    console.log(vertex);
    for (let adjacent of this.vertices[vertex]) {
      if (!visited[adjacent]) {
        this.DFSUtil(adjacent, visited);
      }
    }
  }

  // Método recorridoBFS (BFS): recorre el grafo en anchura (Breadth-First Search)
  BFS(start) {
    const visited = {};
    const queue = [start];

    visited[start] = true;

    while (queue.length) {
      const vertex = queue.shift();
      console.log(vertex);

      for (let adjacent of this.vertices[vertex]) {
        if (!visited[adjacent]) {
          visited[adjacent] = true;
          queue.push(adjacent);
        }
      }
    }
  }

  // Método imprimir (print): imprime la lista de adyacencia del grafo
  print() {
    for (let vertex in this.vertices) {
      console.log(`${vertex} -> ${this.vertices[vertex].join(", ")}`);
    }
  }
}

// Ejemplo de uso de la clase Grafo (Graph)
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

console.log("Impresión del grafo:");
graph.print(); // Imprime la lista de adyacencia del grafo

console.log("Recorrido DFS desde 'A':");
graph.DFS("A"); // Recorre el grafo en profundidad (DFS)

console.log("Recorrido BFS desde 'A':");
graph.BFS("A"); // Recorre el grafo en anchura (BFS)
