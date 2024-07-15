// Clase Nodo (Node)
class Nodo {
  constructor(dato) {
    this.dato = dato;
    this.siguiente = null;
  }
}

// Clase ListaEnlazada (LinkedList)
class ListaEnlazada {
  constructor() {
    this.cabeza = null;
    this.tamaño = 0;
  }

  // Método agregar (add): agrega un nuevo nodo al final de la lista
  agregar(dato) {
    const nuevoNodo = new Nodo(dato);

    if (this.cabeza === null) {
      this.cabeza = nuevoNodo;
    } else {
      let actual = this.cabeza;
      while (actual.siguiente) {
        actual = actual.siguiente;
      }
      actual.siguiente = nuevoNodo;
    }

    this.tamaño++;
  }

  // Método eliminar (remove): elimina el nodo con el dato especificado
  eliminar(dato) {
    if (this.cabeza === null) {
      return null;
    }

    if (this.cabeza.dato === dato) {
      this.cabeza = this.cabeza.siguiente;
    } else {
      let actual = this.cabeza;
      let previo = null;

      while (actual !== null && actual.dato !== dato) {
        previo = actual;
        actual = actual.siguiente;
      }

      if (actual === null) {
        return null;
      }

      previo.siguiente = actual.siguiente;
    }

    this.tamaño--;
  }

  // Método buscar (find): busca un nodo con el dato especificado
  buscar(dato) {
    let actual = this.cabeza;

    while (actual !== null) {
      if (actual.dato === dato) {
        return actual;
      }
      actual = actual.siguiente;
    }

    return null;
  }

  // Método isEmpty: verifica si la lista está vacía
  isEmpty() {
    return this.tamaño === 0;
  }

  // Método size: retorna el número de nodos en la lista
  size() {
    return this.tamaño;
  }

  // Método imprimir (print): imprime los datos de los nodos de la lista
  imprimir() {
    let actual = this.cabeza;
    const elementos = [];

    while (actual !== null) {
      elementos.push(actual.dato);
      actual = actual.siguiente;
    }

    console.log(elementos.join(" -> "));
  }
}

// Ejemplo de uso de la clase ListaEnlazada
const lista = new ListaEnlazada();
lista.agregar(1); // Agrega 1 a la lista
lista.agregar(2); // Agrega 2 a la lista
lista.agregar(3); // Agrega 3 a la lista

lista.imprimir(); // Imprime: 1 -> 2 -> 3

console.log(lista.buscar(2)); // Retorna el nodo con el dato 2
console.log(lista.size()); // Retorna el tamaño de la lista: 3
console.log(lista.isEmpty()); // Verifica si la lista está vacía: false

lista.eliminar(2); // Elimina el nodo con el dato 2
lista.imprimir(); // Imprime: 1 -> 3
