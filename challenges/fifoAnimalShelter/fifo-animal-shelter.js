class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = class AnimalShelter {
  constructor() {
    this.front = null;
    this.last = null;
  }

  enqueue(animal) { // where animal is like { name: 'spot', type: 'dog' }
    const animalNode = new Node(animal);
    if(!this.front) this.front = animalNode;
    else this.last.next = animalNode;
    this.last = animalNode;
  }

  dequeue(pref = null) {
    if(!this.front) return null;
    if(!pref) {
      const popped = this.front;
      this.front = this.front.next;
      return popped.value.type;
    } else {
      let current = this.front;
      while(current.next.value.type !== pref) { // where value.type is 'dog' or 'cat'
        current = current.next;
        if(!current.next) return null;
      }
      const found = current.next;
      current.next = found.next;
      return found.value.type;
    }
  }

  toString() {
    if(!this.front) return null;
    const nodesArray = [];
    let node = this.front;
    while(node) {
      nodesArray.push(node.value.type);
      node = node.next;
    }
    return nodesArray.join(' -> ');
  }
};
