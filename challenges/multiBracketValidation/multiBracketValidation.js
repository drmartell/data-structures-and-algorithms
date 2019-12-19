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

const multiBracketValidation = string => {
  const bracketStack = new Stack();
  const bracketPairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for(const char of string)
    if('()[]{}'.includes(char))
      bracketPairs[char] === bracketStack.peek() ?
        bracketStack.pop() :
        bracketStack.push(char);

  return !bracketStack.peek();
};

module.exports = multiBracketValidation;
