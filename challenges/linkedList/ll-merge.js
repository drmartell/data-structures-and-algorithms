const LinkedList = require('../linkedList/linked-list');

// const mergeLists = (list1, list2) => {
//   const mergedList = new LinkedList();

//   while(list1.head) {
//     mergedList.append(list1.head.value);
//     list1.head = list1.head.next;
//     mergedList.append(list2.head.value);
//     list2.head = list2.head.next;
//   }

//   while(list2.head) {
//     list1.insertAfter(current.value, list2.head.value);
//     if(list2.head.next) list2.head = list2.head.next;
//     else break;
//     current = current.next.next;
//     if(!current.next) {
//       list1.append(list2.head.value);
//       break;
//     }
//   }

//   return list1;
// };

// const mergeLists = (list1, list2) => {
//   let current = list1.head;

//   while(list2.head) {
//     list1.insertAfter(current.value, list2.head.value);
//     if(list2.head.next) list2.head = list2.head.next;
//     else break;
//     current = current.next.next;
//     if(!current.next) {
//       list1.append(list2.head.value);
//       break;
//     }
//   }

//   return list1;
// };

// const mergeLists = (list1, list2) => {
//   let 
//     mergeNode = list1.head,
//     savedNode;
//   while(mergeNode.next){
//     savedNode = mergeNode.next;
//     mergeNode.next = list2.head; 
//     list2.head = savedNode;
//     mergeNode = mergeNode.next;    
//   }
//   mergeNode.next = list2.head;
//   return list1;
// };

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
