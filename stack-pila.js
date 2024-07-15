// Clase Pila (Stack)
class Pila {
    constructor() {
      this.items = [];
    }
  
    // Método push: agrega un elemento al tope de la pila
    push(element) {
      this.items.push(element);
    }
  
    // Método pop: elimina y retorna el elemento del tope de la pila
    pop() {
      if (this.isEmpty()) {
        return "La pila está vacía";
      }
      return this.items.pop();
    }
  
    // Método peek: retorna el elemento del tope de la pila sin eliminarlo
    peek() {
      if (this.isEmpty()) {
        return "La pila está vacía";
      }
      return this.items[this.items.length - 1];
    }
  
    // Método isEmpty: verifica si la pila está vacía
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Método size: retorna el número de elementos en la pila
    size() {
      return this.items.length;
    }
  
    // Método print: imprime los elementos de la pila
    print() {
      console.log(this.items.toString());
    }
  }
  
  // Ejemplo de uso de la clase Pila
  const pila = new Pila();
  pila.push(1);     // Agrega 1 a la pila
  pila.push(2);     // Agrega 2 a la pila
  pila.push(3);     // Agrega 3 a la pila
  
  pila.print();     // Imprime: 1,2,3
  
  console.log(pila.pop());  // Elimina y retorna el tope: 3
  console.log(pila.peek()); // Retorna el tope sin eliminar: 2
  console.log(pila.size()); // Retorna el tamaño de la pila: 2
  console.log(pila.isEmpty()); // Verifica si la pila está vacía: false
  
  pila.print();     // Imprime: 1,2
  