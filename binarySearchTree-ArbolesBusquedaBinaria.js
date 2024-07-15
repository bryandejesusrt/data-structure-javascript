// Clase Nodo (Node)
class Nodo {
    constructor(dato) {
      this.dato = dato;
      this.izquierdo = null;
      this.derecho = null;
    }
  }
  
  // Clase ArbolBinarioBusqueda (BinarySearchTree)
  class ArbolBinarioBusqueda {
    constructor() {
      this.raiz = null;
    }
  
    // Método agregar (add): agrega un nodo al árbol binario de búsqueda
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
  
    // Método eliminar (remove): elimina un nodo con el dato especificado
    eliminar(dato) {
      this.raiz = this.eliminarNodo(this.raiz, dato);
    }
  
    eliminarNodo(nodo, dato) {
      if (nodo === null) {
        return null;
      }
      if (dato < nodo.dato) {
        nodo.izquierdo = this.eliminarNodo(nodo.izquierdo, dato);
        return nodo;
      } else if (dato > nodo.dato) {
        nodo.derecho = this.eliminarNodo(nodo.derecho, dato);
        return nodo;
      } else {
        // Nodo con un solo hijo o sin hijos
        if (nodo.izquierdo === null && nodo.derecho === null) {
          nodo = null;
          return nodo;
        }
        if (nodo.izquierdo === null) {
          nodo = nodo.derecho;
          return nodo;
        } else if (nodo.derecho === null) {
          nodo = nodo.izquierdo;
          return nodo;
        }
  
        // Nodo con dos hijos: obtener el sucesor inorder (menor en el subárbol derecho)
        let sucesor = this.encontrarMinimo(nodo.derecho);
        nodo.dato = sucesor.dato;
        nodo.derecho = this.eliminarNodo(nodo.derecho, sucesor.dato);
        return nodo;
      }
    }
  
    // Método encontrarMinimo (findMin): encuentra el nodo con el valor mínimo
    encontrarMinimo(nodo) {
      while (nodo.izquierdo !== null) {
        nodo = nodo.izquierdo;
      }
      return nodo;
    }
  
    // Método imprimir (print): imprime el árbol en inorden
    imprimir() {
      this.inOrden(this.raiz);
    }
  }
  
  // Ejemplo de uso de la clase ArbolBinarioBusqueda
  const arbolBinarioBusqueda = new ArbolBinarioBusqueda();
  arbolBinarioBusqueda.agregar(8);
  arbolBinarioBusqueda.agregar(3);
  arbolBinarioBusqueda.agregar(10);
  arbolBinarioBusqueda.agregar(1);
  arbolBinarioBusqueda.agregar(6);
  arbolBinarioBusqueda.agregar(14);
  arbolBinarioBusqueda.agregar(4);
  arbolBinarioBusqueda.agregar(7);
  arbolBinarioBusqueda.agregar(13);
  
  console.log("Impresión en inorden:");
  arbolBinarioBusqueda.imprimir();  // Imprime el árbol en inorden
  
  console.log("Impresión en preorden:");
  arbolBinarioBusqueda.preOrden(arbolBinarioBusqueda.raiz);  // Imprime el árbol en preorden
  
  console.log("Impresión en postorden:");
  arbolBinarioBusqueda.postOrden(arbolBinarioBusqueda.raiz);  // Imprime el árbol en postorden
  
  console.log("Buscar 6:", arbolBinarioBusqueda.buscar(6));  // Busca y retorna el nodo con el dato 6
  
  arbolBinarioBusqueda.eliminar(10);  // Elimina el nodo con el dato 10
  console.log("Impresión en inorden después de eliminar 10:");
  arbolBinarioBusqueda.imprimir();  // Imprime el árbol en inorden después de eliminar el nodo 10
  