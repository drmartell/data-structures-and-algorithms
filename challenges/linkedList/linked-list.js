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

  append(value) {
    const node = new Node(value);
    let current = this.head;
    while(current.next !== null)
      current = current.next;
    current.next = node;
    ++this.size;
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
        ++this.size;
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
        ++this.size;
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

  delete(value) {
    let
      current = this.head,
      previous = this.head,
      found = false;
    while(current) {
      if(current.value === value) {
        previous.next = current.next;
        found = true;
        --this.size;
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
    return nodesArray.join('->');
  }
}

module.exports = LinkedList;
