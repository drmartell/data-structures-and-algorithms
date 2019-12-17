const { PseudoQueue } = require('../challenges/queueWithStacks/queue-with-stacks');

let pseudoQueue;

beforeEach(() => {
  pseudoQueue = new PseudoQueue(5);
});

describe('PseudoQueue operation', () => {
  it('can instantiate a PseudoQueue with a single node.', () => {
    expect(pseudoQueue.end.value).toEqual(5);
  });
  it('can enqueue a value', () => {
    pseudoQueue.enqueue(10);
    expect(pseudoQueue.toString()).toEqual('10 -> 5');
  });
  it('can dequeue a value', () => {
    pseudoQueue.enqueue(10);
    pseudoQueue.enqueue(15);
    expect(pseudoQueue.toString()).toEqual('15 -> 10 -> 5');
    expect(pseudoQueue.dequeue()).toEqual(5);
    expect(pseudoQueue.toString()).toEqual('15 -> 10');
  });
});
