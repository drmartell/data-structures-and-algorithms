class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  insert(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  append(value) {
    const node = new Node(value);
    let current = this.head;
    while(current) {
      if(current.value !== null) current = current.next;
    }
    current.next = node;
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    let current = this.head;
    let previous = this.head;
    let found = false;
    while(current) {
      if(current.value === value) {
        previous.next = newNode;
        newNode.next = current;
        found = true;
      }
      previous = current;
      current = current.next;
    }
    if(!found) throw ('value not found');
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    let current = this.head;
    let found = false;
    while(current) {
      if(current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        found = true;
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
    let current = this.head;
    let index = 0;
    while(current) {
      if(current.value === value) return index;
      current = current.next;
      ++index;
    }
    return false;
  }

  delete(value) {
    let current = this.head;
    let previous = this.head;
    let found = false;
    while(current) {
      if(current.value === value) {
        previous.next = current.next;
        found = true;
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
    return nodesArray.join(',');
  }
}

module.exports = LinkedList;

// .append(value) which adds a new node with the given value to the end of the list
// .insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
// .insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node
