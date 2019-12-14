const LinkedList = require('../linkedList/linked-list');

const mergeLists = (ll1, ll2) => {
  const merged = new LinkedList();
  const currentObj = { current1: ll1.head.next, current2: ll2.head };
  merged.head = ll1.head;
  let currentMerged = merged.head;
  merged.length = 1;
  const merge = currentString => {
    currentMerged.next = currentObj[currentString];
    currentMerged = currentObj[currentString];
    currentObj[currentString] = currentObj[currentString].next;
    ++merged.length;
  };
  while(currentObj.current2) {
    merge('current2');
    if(currentObj.current1) merge('current1');
  }
  while(currentObj.current1) merge('current1');

  return merged;
};

const mergeSortedLists = (ll1, ll2) => {
  const merged = new LinkedList();
  let
    current1 = ll1.head,
    current2 = ll2.head,
    currentMerged;

  const determineNext = (node1, node2) => {
    let nextNode;
    if(!node1) {
      nextNode = node2;
      current2 = node2.next;
    }
    else if(!node2) {
      nextNode = node1;
      current1 = node1.next;
    }
    
    if(!nextNode && [node1.value, node2.value].sort()[0] === node1.value) {
      nextNode = node1;
      current1 = node1.next;
    }
    else {
      nextNode = node2;
      current2 = node2.next;
    }

    if(!merged.head) {
      merged.head = nextNode;
      currentMerged = merged.head;
      merged.length = 1;
    }
    else {
      currentMerged.next = nextNode;
      currentMerged = nextNode;
    }
  };

  while(current1 || current2) {
    if(merged.length > 0) ++merged.length;
    determineNext(current1, current2);
  }

  return merged;
};

module.exports = {
  mergeLists,
  mergeSortedLists,
};
