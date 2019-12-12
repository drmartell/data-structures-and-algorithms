const LinkedList = require('../challenges/linkedList/linked-list');
const { mergeLists, mergeSortedLists } = require('../challenges/linkedList/ll-merge');

// head -> [1] -> [3] -> [2] -> X	head -> [5] -> [9] -> [4] -> X	head -> [1] -> [5] -> [3] -> [9] -> [2] -> [4] -> X
// head -> [1] -> [3] -> X	head -> [5] -> [9] -> [4] -> X	head -> [1] -> [5] -> [3] -> [9] -> [4] -> X
// head -> [1] -> [3] -> [2] -> X	head -> [5] -> [9] -> X	head -> [1] -> [5] -> [3] -> [9] -> [2] -> X

let
  ll1,
  ll2;

beforeEach(() => {
  ll1 = new LinkedList();
  ll2 = new LinkedList();
});

describe('mergedList operation', () => {
  it('can merge 2 linked lists as expected', () => {
    ll1.insert(2); ll1.insert(3); ll1.insert(1);
    ll2.insert(4); ll2.insert(9); ll2.insert(5);
    expect(mergeLists(ll1, ll2).toString()).toEqual('1 -> 5 -> 3 -> 9 -> 2 -> 4');
  });
  it('can merge 2 linked lists as expected', () => {
    ll1.insert(3); ll1.insert(1);
    ll2.insert(4); ll2.insert(9); ll2.insert(5);
    expect(mergeLists(ll1, ll2).toString()).toEqual('1 -> 5 -> 3 -> 9 -> 4');
  });
  it('can merge 2 linked lists as expected', () => {
    ll1.insert(2); ll1.insert(3); ll1.insert(1);
    ll2.insert(9); ll2.insert(5);
    expect(mergeLists(ll1, ll2).toString()).toEqual('1 -> 5 -> 3 -> 9 -> 2');
  });
});

describe('mergedSortedLists operation', () => {
  it.skip('can merge 2 linked lists as expected', () => {
    ll1.insert(3); ll1.insert(2); ll1.insert(1);
    ll2.insert(3); ll2.insert(2); ll2.insert(1);
    expect(mergeSortedLists(ll1, ll2).toString()).toEqual('1 -> 1 -> 2 -> 2 -> 3 -> 3');
  });
  it.skip('can merge 2 linked lists as expected', () => {
    ll1.insert(3); ll1.insert(1);
    ll2.insert(4); ll2.insert(9); ll2.insert(5);
    expect(mergeLists(ll1, ll2).toString()).toEqual('1 -> 5 -> 3 -> 9 -> 4');
  });
  it.skip('can merge 2 linked lists as expected', () => {
    ll1.insert(2); ll1.insert(3); ll1.insert(1);
    ll2.insert(9); ll2.insert(5);
    expect(mergeLists(ll1, ll2).toString()).toEqual('1 -> 5 -> 3 -> 9 -> 2');
  });
});
