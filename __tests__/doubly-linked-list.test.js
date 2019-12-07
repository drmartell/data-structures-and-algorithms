const DoublyLinkedList = require('../challenges/doublyLinkedList/doubly-linked-list');

let doublyLinkedList;

beforeEach(() => {
  doublyLinkedList = new DoublyLinkedList();
});

describe('LinkedList operation', () => {
  it('can successfully instantiate an empty list', () => {
    expect(doublyLinkedList.head).toBeNull();
    expect(doublyLinkedList.size).toEqual(0);
  });
  it('can prepend to the list', () => {
    doublyLinkedList.prepend(1);
    expect(doublyLinkedList.head.value).toEqual(1);
    expect(doublyLinkedList.size).toEqual(1);
  });
  it('the can append to the list', () => {
    doublyLinkedList.append(1);
    expect(doublyLinkedList.head.value).toEqual(1);
    expect(doublyLinkedList.head.value).toEqual(1);
  });
  it('can return the zero-based index of a given value', () => {
    doublyLinkedList.prepend(3);
    doublyLinkedList.prepend(2);
    doublyLinkedList.prepend(1);
    expect(doublyLinkedList.size).toEqual(3);
    expect(doublyLinkedList.indexOf(2)).toEqual(1);
  });
  it('will return false when searching for a value in the list that does not exist', () => {
    doublyLinkedList.prepend(3);
    doublyLinkedList.prepend(77);
    doublyLinkedList.prepend(2);
    doublyLinkedList.prepend(1);
    expect(doublyLinkedList.indexOf(4)).toBeFalsy();
  });
  it('can return a collection of all the values that exist in the list', () => {
    doublyLinkedList.prepend(3);
    doublyLinkedList.prepend(77);
    doublyLinkedList.prepend(2);
    doublyLinkedList.prepend(1);
    expect(doublyLinkedList.toString()).toEqual('1,2,77,3');
  });
});
