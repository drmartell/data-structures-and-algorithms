class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(tree) {
    this.tree = tree;
  }
  preOrder() {

  }
  inOrder() {

  }
  postOrder() {

  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  add(value) {
    const node = this.root;
    if(!node) {
      this.root = new Node(value);
      return;
    } else {
      const searchTree = function(node) {
        if(value < node.value) {
          if(!node.left) {
            node.left = new Node(value);
            return;
          } else return searchTree(node.left);
        } else if(value > node.value) {
          if(!node.right) {
            node.right = new Node(value);
            return;
          } else return searchTree(node.right);
        } else return null;
      };
      return searchTree(node);
    }
  }
}
