// Clase Nodo (Node)
class Nodo {
  constructor(dato) {
    this.dato = dato;
    this.izquierdo = null;
    this.derecho = null;
  }
}

// Clase ArbolBinario (BinaryTree)
class ArbolBinario {
  constructor() {
    this.raiz = null;
  }

  // Método agregar (add): agrega un nodo al árbol binario
  agregar(dato) {
    const nuevoNodo = new Nodo(dato);
    if (this.raiz === null) {
      this.raiz = nuevoNodo;
    } else {
      this.agregarNodo(this.raiz, nuevoNodo);
    }
  }

  agregarNodo(nodo, nuevoNodo) {
    if (nuevoNodo.dato < nodo.dato) {
      if (nodo.izquierdo === null) {
        nodo.izquierdo = nuevoNodo;
      } else {
        this.agregarNodo(nodo.izquierdo, nuevoNodo);
      }
    } else {
      if (nodo.derecho === null) {
        nodo.derecho = nuevoNodo;
      } else {
        this.agregarNodo(nodo.derecho, nuevoNodo);
      }
    }
  }

  // Método buscar (find): busca un nodo con el dato especificado
  buscar(dato) {
    return this.buscarNodo(this.raiz, dato);
  }

  buscarNodo(nodo, dato) {
    if (nodo === null) {
      return null;
    }
    if (dato < nodo.dato) {
      return this.buscarNodo(nodo.izquierdo, dato);
    } else if (dato > nodo.dato) {
      return this.buscarNodo(nodo.derecho, dato);
    } else {
      return nodo;
    }
  }

  // Método inOrden (inOrder): recorre el árbol en inorden
  inOrden(nodo) {
    if (nodo !== null) {
      this.inOrden(nodo.izquierdo);
      console.log(nodo.dato);
      this.inOrden(nodo.derecho);
    }
  }

  // Método preOrden (preOrder): recorre el árbol en preorden
  preOrden(nodo) {
    if (nodo !== null) {
      console.log(nodo.dato);
      this.preOrden(nodo.izquierdo);
      this.preOrden(nodo.derecho);
    }
  }

  // Método postOrden (postOrder): recorre el árbol en postorden
  postOrden(nodo) {
    if (nodo !== null) {
      this.postOrden(nodo.izquierdo);
      this.postOrden(nodo.derecho);
      console.log(nodo.dato);
    }
  }

  // Método imprimir (print): imprime el árbol en inorden
  imprimir() {
    this.inOrden(this.raiz);
  }
}

// Ejemplo de uso de la clase ArbolBinario
const arbolBinario = new ArbolBinario();
arbolBinario.agregar(8);
arbolBinario.agregar(3);
arbolBinario.agregar(10);
arbolBinario.agregar(1);
arbolBinario.agregar(6);
arbolBinario.agregar(14);
arbolBinario.agregar(4);
arbolBinario.agregar(7);
arbolBinario.agregar(13);

console.log("Impresión en inorden:");
arbolBinario.imprimir(); // Imprime el árbol en inorden

console.log("Impresión en preorden:");
arbolBinario.preOrden(arbolBinario.raiz); // Imprime el árbol en preorden

console.log("Impresión en postorden:");
arbolBinario.postOrden(arbolBinario.raiz); // Imprime el árbol en postorden

console.log("Buscar 6:", arbolBinario.buscar(6)); // Busca y retorna el nodo con el dato 6
