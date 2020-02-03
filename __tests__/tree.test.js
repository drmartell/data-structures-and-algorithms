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
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(4);
    binarySearchTree.add(5);
    binaryTree = new BinaryTree(binarySearchTree);
    expect(binaryTree.preOrder()).toEqual([1, 2, 3, 4, 5]);
  });

  it('can return a collection from inorder traversal', () => {
    binarySearchTree.add(1);
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(4);
    binarySearchTree.add(5);
    binaryTree = new BinaryTree(binarySearchTree);
    expect(binaryTree.inOrder()).toEqual([1, 2, 3, 4, 5]);
  });

  it('can return a collection from postorder traversal', () => {
    binarySearchTree.add(1);
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(4);
    binarySearchTree.add(5);
    binaryTree = new BinaryTree(binarySearchTree);
    expect(binaryTree.postOrder()).toEqual([5, 4, 3, 2, 1]);
  });

  it('can traverse a tree using breadth first', () => {
    binarySearchTree.add(3);
    binarySearchTree.add(1);
    binarySearchTree.add(2);
    binarySearchTree.add(4);
    binarySearchTree.add(5);
    binarySearchTree.add(3);
    binarySearchTree.add(4);
    binarySearchTree.add(5);
    binarySearchTree.add(1);
    binarySearchTree.add(2);
    binaryTree = new BinaryTree(binarySearchTree);
    expect(binaryTree.breadthFirst()).toEqual([3, 1, 4, 2, 3, 5, 1, 2, 4, 5]);
  });

  it('can find the maximum value in a tree', () => {
    binarySearchTree.add(3);
    binarySearchTree.add(1);
    binarySearchTree.add(2);
    binarySearchTree.add(4);
    binarySearchTree.add(5);
    binarySearchTree.add(333);
    binarySearchTree.add(4);
    binarySearchTree.add(5);
    binarySearchTree.add(1);
    binarySearchTree.add(444);
    binaryTree = new BinaryTree(binarySearchTree);
    expect(binaryTree.findMax()).toEqual(444);
  });
});
