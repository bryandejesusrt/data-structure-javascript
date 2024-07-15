// Clase Grafo (Graph)
class Grafo {
  constructor() {
    this.vertices = {};
  }

  // Método agregarVertice (addVertex): agrega un nuevo vértice al grafo
  agregarVertice(vertice) {
    if (!this.vertices[vertice]) {
      this.vertices[vertice] = [];
    }
  }

  // Método agregarArista (addEdge): agrega una arista entre dos vértices
  agregarArista(vertice1, vertice2) {
    if (!this.vertices[vertice1]) {
      this.agregarVertice(vertice1);
    }
    if (!this.vertices[vertice2]) {
      this.agregarVertice(vertice2);
    }
    this.vertices[vertice1].push(vertice2);
    this.vertices[vertice2].push(vertice1); // Para un grafo no dirigido
  }

  // Método eliminarArista (removeEdge): elimina una arista entre dos vértices
  eliminarArista(vertice1, vertice2) {
    this.vertices[vertice1] = this.vertices[vertice1].filter(
      (v) => v !== vertice2
    );
    this.vertices[vertice2] = this.vertices[vertice2].filter(
      (v) => v !== vertice1
    );
  }

  // Método eliminarVertice (removeVertex): elimina un vértice y sus aristas asociadas
  eliminarVertice(vertice) {
    while (this.vertices[vertice].length) {
      const adyacente = this.vertices[vertice].pop();
      this.eliminarArista(vertice, adyacente);
    }
    delete this.vertices[vertice];
  }

  // Método recorridoDFS (DFS): recorre el grafo en profundidad (Depth-First Search)
  recorridoDFS(inicio) {
    const visitados = {};
    this.DFSUtil(inicio, visitados);
  }

  DFSUtil(vertice, visitados) {
    visitados[vertice] = true;
    console.log(vertice);
    for (let adyacente of this.vertices[vertice]) {
      if (!visitados[adyacente]) {
        this.DFSUtil(adyacente, visitados);
      }
    }
  }

  // Método recorridoBFS (BFS): recorre el grafo en anchura (Breadth-First Search)
  recorridoBFS(inicio) {
    const visitados = {};
    const cola = [inicio];

    visitados[inicio] = true;

    while (cola.length) {
      const vertice = cola.shift();
      console.log(vertice);

      for (let adyacente of this.vertices[vertice]) {
        if (!visitados[adyacente]) {
          visitados[adyacente] = true;
          cola.push(adyacente);
        }
      }
    }
  }

  // Método imprimir (print): imprime la lista de adyacencia del grafo
  imprimir() {
    for (let vertice in this.vertices) {
      console.log(`${vertice} -> ${this.vertices[vertice].join(", ")}`);
    }
  }
}

// Ejemplo de uso de la clase Grafo
const grafo = new Grafo();
grafo.agregarVertice("A");
grafo.agregarVertice("B");
grafo.agregarVertice("C");
grafo.agregarVertice("D");
grafo.agregarVertice("E");

grafo.agregarArista("A", "B");
grafo.agregarArista("A", "C");
grafo.agregarArista("B", "D");
grafo.agregarArista("C", "E");
grafo.agregarArista("D", "E");

console.log("Impresión del grafo:");
grafo.imprimir(); // Imprime la lista de adyacencia del grafo

console.log("Recorrido DFS desde 'A':");
grafo.recorridoDFS("A"); // Recorre el grafo en pro
