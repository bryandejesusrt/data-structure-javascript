// Clase Mapa (Map)
class Mapa {
  constructor() {
    this.mapa = {};
  }

  // Método agregar (set): agrega una clave y su valor al mapa
  agregar(clave, valor) {
    this.mapa[clave] = valor;
  }

  // Método obtener (get): obtiene el valor asociado a una clave
  obtener(clave) {
    return this.mapa.hasOwnProperty(clave) ? this.mapa[clave] : null;
  }

  // Método eliminar (delete): elimina una clave y su valor del mapa
  eliminar(clave) {
    if (this.mapa.hasOwnProperty(clave)) {
      delete this.mapa[clave];
    }
  }

  // Método contiene (has): verifica si una clave existe en el mapa
  contiene(clave) {
    return this.mapa.hasOwnProperty(clave);
  }

  // Método tamaño (size): retorna el número de claves en el mapa
  tamaño() {
    return Object.keys(this.mapa).length;
  }

  // Método limpiar (clear): elimina todas las claves y valores del mapa
  limpiar() {
    this.mapa = {};
  }

  // Método imprimir (print): imprime todas las claves y valores del mapa
  imprimir() {
    for (let clave in this.mapa) {
      if (this.mapa.hasOwnProperty(clave)) {
        console.log(`${clave}: ${this.mapa[clave]}`);
      }
    }
  }
}

// Ejemplo de uso de la clase Mapa
const mapa = new Mapa();
mapa.agregar('nombre', 'Bryan');
mapa.agregar('edad', 25);
mapa.agregar('pais', 'República Dominicana');

console.log("Impresión del mapa:");
mapa.imprimir();  // Imprime todas las claves y valores del mapa

console.log("Obtener 'nombre':", mapa.obtener('nombre'));  // Obtiene el valor asociado a 'nombre'

console.log("El mapa contiene 'edad'?", mapa.contiene('edad'));  // Verifica si 'edad' está en el mapa

mapa.eliminar('pais');  // Elimina la clave 'pais'
console.log("Impresión del mapa después de eliminar 'pais':");
mapa.imprimir();  // Imprime todas las claves y valores del mapa

console.log("Tamaño del mapa:", mapa.tamaño());  // Retorna el número de claves en el mapa

mapa.limpiar();  // Elimina todas las claves y valores del mapa
console.log("Impresión del mapa después de limpiar:");
mapa.imprimir();  // Imprime todas las claves y valores del mapa (debería estar vacío)
