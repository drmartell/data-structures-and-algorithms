const { BinarySearchTree, BinaryTree } = require('../challenges/tree/tree');

let binarySearchTree;
let binaryTree;

beforeEach(() => {
  binarySearchTree = new BinarySearchTree();
});

describe('BinarySearchTree operation', () => {

  it('can instantiate a new tree with a null root', () => {
    const emptyTree = new BinarySearchTree();
    expect(emptyTree.root.value).toEqual(null);
  });

  it('can instantiate a BST with a single node.', () => {
    binarySearchTree.add(5);
    expect(JSON.stringify(binarySearchTree)).toEqual('{"root":{"value":5,"left":null,"right":null}}');
  });

  it('can add left and right nodes', () => {
    binarySearchTree.add(2);
    binarySearchTree.add(1);
    binarySearchTree.add(3);
    expect(binarySearchTree.root.value).toEqual(2);
    expect(binarySearchTree.root.left.value).toEqual(1);
    expect(binarySearchTree.root.right.value).toEqual(3);
  });
});

describe('BinaryTree operation', () => {
  it('can return a collection from preorder traversal', () => {
    binarySearchTree.add(1);
    binaryTree = new BinaryTree(binarySearchTree);
    binarySearchTree.add(20);
    binarySearchTree.add(3);
    binarySearchTree.add(4);
    expect(binaryTree.preOrder()).toEqual([1, 20, 3, 4]);
    binarySearchTree.add(5);
    binarySearchTree.add(6);
    binarySearchTree.add(7);
    binarySearchTree.add(8);
    binarySearchTree.add(9);
    expect(binaryTree.preOrder()).toEqual([1, 20, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('can return a collection from inorder traversal', () => {
    binarySearchTree.add(1);
    binaryTree = new BinaryTree(binarySearchTree);
    binarySearchTree.add(2);
    binarySearchTree.add(4);
    binarySearchTree.add(5);
    expect(binaryTree.inOrder()).toEqual([1, 2, 4, 5]);
    binarySearchTree.add(3);
    binarySearchTree.add(6);
    binarySearchTree.add(8);
    binarySearchTree.add(7);
    binarySearchTree.add(9);
    expect(binaryTree.inOrder()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('can return a collection from postorder traversal', () => {
    binarySearchTree.add(3);
    binarySearchTree.add(1);
    binarySearchTree.add(2);
    binarySearchTree.add(4);
    binarySearchTree.add(5);
    expect(binaryTree.postOrder()).toEqual([2, 1, 5, 4, 3]);
    binarySearchTree.add(3);
    binarySearchTree.add(4);
    binarySearchTree.add(5);
    binarySearchTree.add(1);
    binarySearchTree.add(2);
    expect(binaryTree.postOrder()).toEqual([1, 2, 2, 1, 3, 4, 5, 5, 4, 3]);
  });
});
