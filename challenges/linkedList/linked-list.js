class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  insert(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    ++this.size;
  }

  includes(value) {
    let node = this.head;
    while(node) {
      if(node.value === value) return true;
      node = node.next;
    }
    return false;
  }

  toString() {
    const nodesArray = [];
    let node = this.head;
    while(node) {
      nodesArray.push(node.value);
      node = node.next;
    }
    return nodesArray.join(',');
  }
}

module.exports = LinkedList;
