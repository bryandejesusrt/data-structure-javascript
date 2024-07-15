// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  // Método agregarHijo: agrega un nuevo nodo hijo
  agregarHijo(node) {
    this.children.push(node);
  }
}

// Tree class
class Tree {
  constructor(data) {
    this.root = new Node(data);
  }

  // Método add: agrega un nodo a un nodo padre especificado
  add(data, parentData) {
    const newNode = new Node(data);
    const parentNode = this.find(this.root, parentData);

    if (parentNode) {
      parentNode.agregarHijo(newNode);
    } else {
      console.log("Parent node not found");
    }
  }

  // Método find: busca un nodo con el dato especificado
  find(node, data) {
    if (node.data === data) {
      return node;
    }

    for (let child of node.children) {
      const result = this.find(child, data);
      if (result) {
        return result;
      }
    }

    return null;
  }

  // Método preOrder: recorre el árbol en preorden
  preOrder(node) {
    if (node !== null) {
      console.log(node.data);
      for (let child of node.children) {
        this.preOrder(child);
      }
    }
  }

  // Método postOrder: recorre el árbol en postorden
  postOrder(node) {
    if (node !== null) {
      for (let child of node.children) {
        this.postOrder(child);
      }
      console.log(node.data);
    }
  }

  // Método print: imprime el árbol en preorden
  print() {
    this.preOrder(this.root);
  }
}

// Ejemplo de uso de la clase Tree
const tree = new Tree("root");
tree.add("child1", "root"); // Agrega "child1" a "root"
tree.add("child2", "root"); // Agrega "child2" a "root"
tree.add("grandchild1", "child1"); // Agrega "grandchild1" a "child1"
tree.add("grandchild2", "child1"); // Agrega "grandchild2" a "child1"
tree.add("grandchild3", "child2"); // Agrega "grandchild3" a "child2"

console.log("Preorder traversal:");
tree.print(); // Imprime el árbol en preorden

console.log("Postorder traversal:");
tree.postOrder(tree.root); // Imprime el árbol en postorden
