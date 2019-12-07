class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    ++this.size;
  }

  append(value) {
    const node = new Node(value);
    if(!this.head) {
      this.head = node;
      this.tail = node;
    }
    else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    node.next = this.head;
    this.head = node;
    ++this.size;
  }

  indexOf(value) {
    let node = this.head;
    let index = 0;
    while(node) {
      if(node.value === value) return index;
      node = node.next;
      ++index;
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

module.exports = DoublyLinkedList;
