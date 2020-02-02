const { BinarySearchTree, BinaryTree } = require('../tree/tree');

const fizzBuzzTree = tree => {
  const binaryTree = new BinaryTree(tree);
  
  const fizzBuzzArray = binaryTree.inOrder().map(value => {
    return ((value % 3 === 0 && value % 5 === 0) ? 'fizzbuzz' :
      value % 3 === 0 ? 'fizz' :
        value % 5 === 0 ? 'buzz' :
          value && (value = value.toString()));
  });

  const newBST = new BinarySearchTree();
  fizzBuzzArray.forEach(element => newBST.add(element));

  return newBST;
};

module.exports = fizzBuzzTree;
