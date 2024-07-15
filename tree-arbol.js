// Clase Nodo (Node)
class Nodo {
    constructor(dato) {
      this.dato = dato;
      this.hijos = [];
    }
  
    // Método agregarHijo: agrega un nuevo nodo hijo
    agregarHijo(nodo) {
      this.hijos.push(nodo);
    }
  }
  
  // Clase Arbol (Tree)
  class Arbol {
    constructor(dato) {
      this.raiz = new Nodo(dato);
    }
  
    // Método agregar (add): agrega un nodo a un nodo padre especificado
    agregar(dato, datoPadre) {
      const nuevoNodo = new Nodo(dato);
      const nodoPadre = this.buscar(this.raiz, datoPadre);
  
      if (nodoPadre) {
        nodoPadre.agregarHijo(nuevoNodo);
      } else {
        console.log("Nodo padre no encontrado");
      }
    }
  
    // Método buscar (find): busca un nodo con el dato especificado
    buscar(nodo, dato) {
      if (nodo.dato === dato) {
        return nodo;
      }
  
      for (let hijo of nodo.hijos) {
        const resultado = this.buscar(hijo, dato);
        if (resultado) {
          return resultado;
        }
      }
  
      return null;
    }
  
    // Método preOrden (preOrder): recorre el árbol en preorden
    preOrden(nodo) {
      if (nodo !== null) {
        console.log(nodo.dato);
        for (let hijo of nodo.hijos) {
          this.preOrden(hijo);
        }
      }
    }
  
    // Método postOrden (postOrder): recorre el árbol en postorden
    postOrden(nodo) {
      if (nodo !== null) {
        for (let hijo of nodo.hijos) {
          this.postOrden(hijo);
        }
        console.log(nodo.dato);
      }
    }
  
    // Método imprimir (print): imprime el árbol en preorden
    imprimir() {
      this.preOrden(this.raiz);
    }
  }
  
  // Ejemplo de uso de la clase Arbol
  const arbol = new Arbol("raiz");
  arbol.agregar("hijo1", "raiz");      // Agrega "hijo1" a "raiz"
  arbol.agregar("hijo2", "raiz");      // Agrega "hijo2" a "raiz"
  arbol.agregar("nieto1", "hijo1");    // Agrega "nieto1" a "hijo1"
  arbol.agregar("nieto2", "hijo1");    // Agrega "nieto2" a "hijo1"
  arbol.agregar("nieto3", "hijo2");    // Agrega "nieto3" a "hijo2"
  
  console.log("Impresión en preorden:");
  arbol.imprimir();  // Imprime el árbol en preorden
  
  console.log("Impresión en postorden:");
  arbol.postOrden(arbol.raiz);  // Imprime el árbol en postorden
  