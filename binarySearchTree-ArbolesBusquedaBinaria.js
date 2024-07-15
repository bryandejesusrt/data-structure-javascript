// Clase Nodo (Node)
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Clase ArbolBinarioBusqueda (BinarySearchTree)
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Método agregar (add): agrega un nodo al árbol binario de búsqueda
  add(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.addNode(this.root, newNode);
    }
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  // Método buscar (find): busca un nodo con el dato especificado
  find(data) {
    return this.findNode(this.root, data);
  }

  findNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data < node.data) {
      return this.findNode(node.left, data);
    } else if (data > node.data) {
      return this.findNode(node.right, data);
    } else {
      return node;
    }
  }

  // Método inOrden (inOrder): recorre el árbol en inorden
  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  // Método preOrden (preOrder): recorre el árbol en preorden
  preOrder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  // Método postOrden (postOrder): recorre el árbol en postorden
  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }

  // Método eliminar (remove): elimina un nodo con el dato especificado
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      // Nodo con un solo hijo o sin hijos
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Nodo con dos hijos: obtener el sucesor inorder (menor en el subárbol derecho)
      let successor = this.findMin(node.right);
      node.data = successor.data;
      node.right = this.removeNode(node.right, successor.data);
      return node;
    }
  }

  // Método encontrarMinimo (findMin): encuentra el nodo con el valor mínimo
  findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  // Método imprimir (print): imprime el árbol en inorden
  print() {
    this.inOrder(this.root);
  }
}

// Ejemplo de uso de la clase ArbolBinarioBusqueda (BinarySearchTree)
const bst = new BinarySearchTree();
bst.add(8);
bst.add(3);
bst.add(10);
bst.add(1);
bst.add(6);
bst.add(14);
bst.add(4);
bst.add(7);
bst.add(13);

console.log("Impresión en inorden:");
bst.print(); // Imprime el árbol en inorden

console.log("Impresión en preorden:");
bst.preOrder(bst.root); // Imprime el árbol en preorden

console.log("Impresión en postorden:");
bst.postOrder(bst.root); // Imprime el árbol en postorden

console.log("Buscar 6:", bst.find(6)); // Busca y retorna el nodo con el dato 6

bst.remove(10); // Elimina el nodo con el dato 10
console.log("Impresión en inorden después de eliminar 10:");
bst.print(); // Imprime el árbol en inorden después de eliminar el nodo 10
