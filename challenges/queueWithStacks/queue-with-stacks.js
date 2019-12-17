class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(value = null) {
    this.top = value ? new Node(value) : null;
  }

  push(value) { // add a node to the top of the stack
    if(!this.peek()) {
      this.top = new Node(value);
    } else {
      const top = this.top;
      this.top = new Node(value);
      this.top.next = top;
    }
  }

  pop() { // remove the topmost node and return its value
    if(!this.peek()) return null;
    const topValue = this.top.value;

    this.top = this.top.next ? this.top.next : null;
    return topValue;
  }

  peek() { // display the value if there is one
    return this.top ? this.top.value : null;
  }
}

class PseudoQueue {
  // implementation per instructions: queue has front and back and next's point forward
  // 2 stacks can be used to manage a queue with on stack's top being the queue's front
  // and the other being the queue's back
  constructor() {
    this.fwdStack = new Stack();
    this.revStack = new Stack();
  }

  noStacks() {
    return !(this.fwdStack && this.revStack);
  }

  frontToTop() {
    if(this.noStacks()) return;
    let poppedNodeValue;
    while(this.fwdStack && this.fwdStack.top) {
      poppedNodeValue = this.fwdStack.pop();
      this.revStack.push(poppedNodeValue);
    }
  }

  backToTop() {
    if(this.noStacks()) return;
    let poppedNodeValue;
    while(this.revStack && this.revStack.top) {
      poppedNodeValue = this.revStack.pop();
      this.fwdStack.push(poppedNodeValue);
    }
  }
  
  enqueue(value) {
    // FIFO, append value to back of queue
    if(this.noStacks()) {
      // initialize
      this.fwdStack.push(value);
      return;
    }
    // or push onto existing stack
    this.fwdStack.push(value);
    return this.fwdStack;
  }

  dequeue() {
    // FIFO, return value from front of queue
    // invert the first stack into the second
    this.frontToTop();

    // remove the front node and get it's value
    const frontNodeValue = this.revStack.pop();
    
    // revert the list to the original ordering
    this.backToTop();
    return frontNodeValue;
  }

  toString() {
    if(this.noStacks()) return null;
    const nodesArray = [];
    let node = this.fwdStack.top;
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
