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

  // get array of only characters of interest
  const stringArr = string.split('').filter(char => '()[]{}'.includes(char));
  if(stringArr.length === 0) return true;

  let result = true;

  stringArr.forEach(char => {
    if('([{'.includes(char)) bracketStack.push(char);
    else if(')]}'.includes(char)) {
      if(!bracketStack.peek() 
      || bracketStack.peek() !== bracketPairs[char]) {
        result = false;
        stringArr.length = 0; // break loop
      } else {
        bracketStack.pop();
      }
    }
  });
  // bracketStack should not have contents now if all brackets were matched
  if(bracketStack.peek()) result = false;
  return result;
};

module.exports = multiBracketValidation;
