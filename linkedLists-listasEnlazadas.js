// Clase Nodo (Node)
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Clase ListaEnlazada (LinkedList)
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Método agregar (add): agrega un nuevo nodo al final de la lista
  add(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.size++;
  }

  // Método eliminar (remove): elimina el nodo con el dato especificado
  remove(data) {
    if (this.head === null) {
      return null;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let previous = null;

      while (current !== null && current.data !== data) {
        previous = current;
        current = current.next;
      }

      if (current === null) {
        return null;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  // Método buscar (find): busca un nodo con el dato especificado
  find(data) {
    let current = this.head;

    while (current !== null) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  // Método isEmpty: verifica si la lista está vacía
  isEmpty() {
    return this.size === 0;
  }

  // Método size: retorna el número de nodos en la lista
  getSize() {
    return this.size;
  }

  // Método imprimir (print): imprime los datos de los nodos de la lista
  print() {
    let current = this.head;
    const elements = [];

    while (current !== null) {
      elements.push(current.data);
      current = current.next;
    }

    console.log(elements.join(" -> "));
  }
}

// Ejemplo de uso de la clase ListaEnlazada (LinkedList)
const list = new LinkedList();
list.add(1); // Agrega 1 a la lista
list.add(2); // Agrega 2 a la lista
list.add(3); // Agrega 3 a la lista

list.print(); // Imprime: 1 -> 2 -> 3

console.log(list.find(2)); // Retorna el nodo con el dato 2
console.log(list.getSize()); // Retorna el tamaño de la lista: 3
console.log(list.isEmpty()); // Verifica si la lista está vacía: false

list.remove(2); // Elimina el nodo con el dato 2
list.print(); // Imprime: 1 -> 3
