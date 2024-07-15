// Clase Fila (Queue)
class Fila {
    constructor() {
      this.items = [];
    }
  
    // Método enqueue: agrega un elemento al final de la fila
    enqueue(element) {
      this.items.push(element);
    }
  
    // Método dequeue: elimina y retorna el primer elemento de la fila
    dequeue() {
      if (this.isEmpty()) {
        return "La fila está vacía";
      }
      return this.items.shift();
    }
  
    // Método front: retorna el primer elemento de la fila sin eliminarlo
    front() {
      if (this.isEmpty()) {
        return "La fila está vacía";
      }
      return this.items[0];
    }
  
    // Método isEmpty: verifica si la fila está vacía
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Método size: retorna el número de elementos en la fila
    size() {
      return this.items.length;
    }
  
    // Método print: imprime los elementos de la fila
    print() {
      console.log(this.items.toString());
    }
  }
  
  // Ejemplo de uso de la clase Fila
  const fila = new Fila();
  fila.enqueue(1); 
  fila.enqueue(2);  // Agrega 2 a la fila
  fila.enqueue(3);  // Agrega 3 a la fila
  
  fila.print();     // Imprime: 1,2,3
  
  console.log(fila.dequeue());  // Elimina y retorna el primer elemento: 1
  console.log(fila.front());    // Retorna el primer elemento sin eliminar: 2
  console.log(fila.size());     // Retorna el tamaño de la fila: 2
  console.log(fila.isEmpty());  // Verifica si la fila está vacía: false
  
  fila.print();     // Imprime: 2,3
  