const LinkedList = require('../challenges/linkedList/linked-list');

let linkedList;

beforeEach(() => {
  linkedList = new LinkedList();
});

describe('LinkedList operation', () => {
  it('can successfully instantiate an empty linked list', () => {
    expect(linkedList.head).toBeNull();
    expect(linkedList.size).toEqual(0);
  });
  it('can properly insert into the linked list', () => {
    linkedList.insert(1);
    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.size).toEqual(1);
  });
  test('the head property points to the first node in the linked list', () => {
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.head.value).toEqual(1);
  });
  it('can insert multiple nodes into the linked list', () => {
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.size).toEqual(2);
  });
  it('will return true when finding a value within the linked list that exists', () => {
    linkedList.insert(3);
    linkedList.insert(77);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.includes(77)).toBeTruthy();
  });
  it('will return false when searching for a value in the linked list that does not exist', () => {
    linkedList.insert(3);
    linkedList.insert(77);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.includes(4)).toBeFalsy();
  });
  it('can return a collection of all the values that exist in the linked list', () => {
    linkedList.insert(3);
    linkedList.insert(77);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.toString()).toEqual('1,2,77,3');
  });
});
