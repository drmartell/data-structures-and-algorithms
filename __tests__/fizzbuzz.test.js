const { BinarySearchTree, BinaryTree } = require('../challenges/tree/tree');
const fizzBuzzTree = require('../challenges/fizzBuzzTree/fizz-buzz-tree');

describe('fizzBuzzTree operation', () => {

  it('can replace nodes as specified', () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.add(1);
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(4);
    binarySearchTree.add(5);
    binarySearchTree.add(10);
    binarySearchTree.add(14);
    binarySearchTree.add(15);
    const originalTreeSearch = new BinaryTree(binarySearchTree);
    const fizzBuzzTreeSearch = new BinaryTree(fizzBuzzTree(binarySearchTree));
    expect(originalTreeSearch.inOrder()).toEqual([1, 2, 3, 4, 5, 10, 14, 15]);
    expect(fizzBuzzTreeSearch.inOrder()).toEqual(['1', '14', '2', '4', 'buzz', 'buzz', 'fizz', 'fizzbuzz']);
  });
});
