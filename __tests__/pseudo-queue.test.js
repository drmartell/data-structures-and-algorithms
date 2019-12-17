const { PseudoQueue } = require('../challenges/queueWithStacks/queue-with-stacks');

let pseudoQueue;

beforeEach(() => {
  pseudoQueue = new PseudoQueue();
});

describe('PseudoQueue operation', () => {
  it('can instantiate a PseudoQueue with a single node.', () => {
    pseudoQueue.enqueue(5);
    expect(pseudoQueue.toString()).toEqual('5');
  });
  it('can enqueue a value', () => {
    pseudoQueue.enqueue(5);
    pseudoQueue.enqueue(10);
    expect(pseudoQueue.toString()).toEqual('10 -> 5');
  });
  it('can dequeue a value and manage successive operations', () => {
    pseudoQueue.enqueue(5);
    pseudoQueue.enqueue(10);
    pseudoQueue.enqueue(15);
    expect(pseudoQueue.toString()).toEqual('15 -> 10 -> 5');
    expect(pseudoQueue.dequeue()).toEqual(5);
    expect(pseudoQueue.toString()).toEqual('15 -> 10');
    pseudoQueue.enqueue(5);
    pseudoQueue.enqueue(4);
    pseudoQueue.enqueue(3);
    expect(pseudoQueue.toString()).toEqual('3 -> 4 -> 5 -> 15 -> 10');
    pseudoQueue.dequeue();
    pseudoQueue.dequeue();
    expect(pseudoQueue.toString()).toEqual('3 -> 4 -> 5');
  });
});
