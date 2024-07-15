// Clase Nodo (Node)
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Clase ArbolBinario (BinaryTree)
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Método agregar (add): agrega un nodo al árbol binario
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

  // Método imprimir (print): imprime el árbol en inorden
  print() {
    this.inOrder(this.root);
  }
}

// Ejemplo de uso de la clase ArbolBinario (BinaryTree)
const binaryTree = new BinaryTree();
binaryTree.add(8);
binaryTree.add(3);
binaryTree.add(10);
binaryTree.add(1);
binaryTree.add(6);
binaryTree.add(14);
binaryTree.add(4);
binaryTree.add(7);
binaryTree.add(13);

console.log("Impresión en inorden:");
binaryTree.print(); // Imprime el árbol en inorden

console.log("Impresión en preorden:");
binaryTree.preOrder(binaryTree.root); // Imprime el árbol en preorden

console.log("Impresión en postorden:");
binaryTree.postOrder(binaryTree.root); // Imprime el árbol en postorden

console.log("Buscar 6:", binaryTree.find(6)); // Busca y retorna el nodo con el dato 6
