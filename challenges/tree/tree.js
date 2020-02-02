class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(tree) {
    this.root = tree.root;
  }

  preOrder(){
    const array = [];
    (function castPreArray(current){
      if(current){
        array.push(current.value);
        castPreArray(current.left);
        castPreArray(current.right);
      }
    }).apply(null, [this.root]);
    return array;
  }

  inOrder(){
    const array = [];
    (function castInArray(current){
      if(current){
        castInArray(current.left);
        array.push(current.value);
        castInArray(current.right);
      }
    }).apply(null, [this.root]);
    return array;
  }

  postOrder(){
    const array = [];
    (function castPostArray(current){
      if(current){
        castPostArray(current.left);
        castPostArray(current.right);
        array.push(current.value);
      }
    }).apply(null, [this.root]);
    return array;
  }
}

class BinarySearchTree {
  constructor(rootValue = null){
    this.root = this.root ? new Node(rootValue) : new Node(null);
  }

  add(value){
    let node = new Node(value);
    if(!this.root.value && !this.root.left && !this.root.right) this.root = node;
    else {
      let current = this.root;
      // eslint-disable-next-line no-extra-boolean-cast
      while(!!current){
        if(node.value < current.value){
          if(!current.left){
            current.left = node;
            break;
          }
          current = current.left;
        } else {
          if(!current.right){
            current.right = node;
            break;
          }
          current = current.right;
        }
      }
    }
    return this;
  }

  contains(value){
    let current = this.root;
    while(current){
      if(value === current.value) return true;
      if(value < current.value) current = current.left;
      if(value > current.value) current = current.right;
    }
    return false;
  }
}

module.exports = {
  Node, BinarySearchTree, BinaryTree
};
