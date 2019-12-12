class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  
  insert(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    ++this.length;
  }

  append(value) {
    const node = new Node(value);
    let current = this.head;
    while(current.next !== null)
      current = current.next;
    current.next = node;
    ++this.length;
  }

  insertBefore(value, newValue) {
    let
      current = this.head,
      previous = this.head,
      found = false;
    while(current) {
      if(current.value === value) {
        const newNode = new Node(newValue);
        previous.next = newNode;
        newNode.next = current;
        found = true;
        ++this.length;
      }
      previous = current;
      current = current.next;
    }
    if(!found) throw ('value not found');
  }

  insertAfter(value, newValue) {
    let
      current = this.head,
      found = false;
    while(current) {
      if(current.value === value) {
        const newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        found = true;
        ++this.length;
      }
      current = current.next;
    }
    if(!found) throw ('value not found');
  }

  includes(value) {
    let current = this.head;
    while(current) {
      if(current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  indexOf(value) {
    let
      current = this.head,
      index = 0;
    while(current) {
      if(current.value === value) return index;
      current = current.next;
      ++index;
    }
    return false;
  }

  kthFromEnd(k) {
    let current = this.head;
    if(k > this.length - 1) throw ('list is shorter than required for k');
    if(k < 0) throw ('k must be greater than or equal to 0, 0 corresponds to the final list node');
    
    const targetIndex = this.length - k - 1;
    for(let i = 0; i < targetIndex; ++i) {
      current = current.next;
    }
    return current.value;
  }

  delete(value) {
    let
      current = this.head,
      previous = this.head,
      found = false;
    while(current) {
      if(current.value === value) {
        previous.next = current.next;
        found = true;
        --this.length;
      }
      previous = current;
      current = current.next;
    }
    if(!found) throw ('value not found, nothing deleted');
  }

  toString() {
    const nodesArray = [];
    let node = this.head;
    while(node) {
      nodesArray.push(node.value);
      node = node.next;
    }
    return nodesArray.join(' -> ');
  }
}

module.exports = LinkedList;
