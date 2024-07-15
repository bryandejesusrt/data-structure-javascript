// Clase Diccionario (Dictionary)
class Diccionario {
  constructor() {
    this.items = {};
  }

  // Método set: agrega un par clave-valor al diccionario
  set(key, value) {
    this.items[key] = value;
  }

  // Método get: retorna el valor asociado a una clave
  get(key) {
    return this.items.hasOwnProperty(key) ? this.items[key] : undefined;
  }

  // Método has: verifica si una clave existe en el diccionario
  has(key) {
    return this.items.hasOwnProperty(key);
  }

  // Método delete: elimina un par clave-valor del diccionario
  delete(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  }

  // Método keys: retorna un arreglo con todas las claves del diccionario
  keys() {
    return Object.keys(this.items);
  }

  // Método values: retorna un arreglo con todos los valores del diccionario
  values() {
    return Object.values(this.items);
  }

  // Método clear: elimina todos los pares clave-valor del diccionario
  clear() {
    this.items = {};
  }

  // Método size: retorna el número de pares clave-valor en el diccionario
  size() {
    return Object.keys(this.items).length;
  }

  // Método print: imprime los pares clave-valor del diccionario
  print() {
    console.log(this.items);
  }
}

// Ejemplo de uso de la clase Diccionario
const diccionario = new Diccionario();
diccionario.set("nombre", "Bryan"); // Agrega el par clave-valor ('nombre', 'Bryan')
diccionario.set("edad", 25); // Agrega el par clave-valor ('edad', 25)
diccionario.set("pais", "España"); // Agrega el par clave-valor ('pais', 'España')

diccionario.print(); // Imprime: { nombre: 'Bryan', edad: 25, pais: 'España' }

console.log(diccionario.get("nombre")); // Retorna: 'Bryan'
console.log(diccionario.has("edad")); // Verifica si existe la clave 'edad': true
console.log(diccionario.size()); // Retorna el tamaño del diccionario: 3

diccionario.delete("pais"); // Elimina el par clave-valor con clave 'pais'
diccionario.print(); // Imprime: { nombre: 'Bryan', edad: 25 }

console.log(diccionario.keys()); // Retorna todas las claves: ['nombre', 'edad']
console.log(diccionario.values()); // Retorna todos los valores: ['Bryan', 25]

diccionario.clear(); // Elimina todos los pares clave-valor
diccionario.print(); // Imprime: {}
