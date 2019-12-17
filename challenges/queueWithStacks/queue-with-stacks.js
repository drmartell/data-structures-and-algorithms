class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(value = null) {
    this.top = new Node(value);
  }
  
  push(value) {
    if(!this.top) {
      this.top = new Node(value);
    } else {
      const top = this.top;
      this.top = new Node(value);
      this.top.next = top;
    }
  }

  pop() {
    if(!this.top) return null;
    const top = this.top;
    this.top = top.next;
    return top;
  }

  peek() {
    return !this.top;
  }
}

class PseudoQueue {
  constructor(value) {
    this.stack1 = new Stack(value);
    this.end = this.stack1.top;
    this.stack2 = new Stack();
  }

  enqueue(value) { //FIFO, append value to back of queue
    this.stack1.push(value);
    this.end = this.stack1.top;
    return this.end;
  }

  dequeue() { //FIFO, return value from front of queue
    // invert the first stack into the second
    let nodeValue;
    while(this.stack1.top) {
      const node = this.stack1.top;
      nodeValue = node.value;
      this.stack1.pop();
      if(!this.stack2.top) this.stack2.top = node;
      else this.stack2.push(node);
    }

    return nodeValue;
  }

  toString() {
    const nodesArray = [];
    let node = this.end;
    while(node) {
      nodesArray.push(node.value);
      node = node.next;
    }
    return nodesArray.join(' -> ');
  }
}

module.exports = {
  PseudoQueue
};
