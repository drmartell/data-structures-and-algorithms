const AnimalShelter = require('../challenges/fifoAnimalShelter/fifo-animal-shelter');

let animalShelter;

beforeEach(() => animalShelter = new AnimalShelter());

describe('animalShelter operation', () => {
  it('can enqueue some dogs and cats', () => {
    animalShelter.enqueue({ type: 'dog' });
    animalShelter.enqueue({ type: 'dog' });
    animalShelter.enqueue({ type: 'dog' });
    animalShelter.enqueue({ type: 'cat' });
    animalShelter.enqueue({ type: 'dog' });
    expect(animalShelter.toString()).toEqual('dog -> dog -> dog -> cat -> dog');
  });
  it('can dequeue a dog', () => {
    animalShelter.enqueue({ type: 'dog' });
    animalShelter.enqueue({ type: 'dog' });
    animalShelter.enqueue({ type: 'dog' });
    animalShelter.enqueue({ type: 'cat' });
    animalShelter.enqueue({ type: 'dog' });
    expect(animalShelter.dequeue('dog')).toEqual('dog');
  });
  it('can dequeue a cat', () => {
    animalShelter.enqueue({ type: 'dog' });
    animalShelter.enqueue({ type: 'dog' });
    animalShelter.enqueue({ type: 'dog' });
    animalShelter.enqueue({ type: 'cat' });
    animalShelter.enqueue({ type: 'dog' });
    expect(animalShelter.dequeue('cat')).toEqual('cat');
  });
  it('returns the list head if there is no preference', () => {
    animalShelter.enqueue({ type: 'dog' });
    animalShelter.enqueue({ type: 'cat' });
    animalShelter.enqueue({ type: 'cat' });
    expect(animalShelter.dequeue()).toEqual('dog');
  });
  it('returns null if the preference is not in the list', () => {
    animalShelter.enqueue({ type: 'dog' });
    animalShelter.enqueue({ type: 'dog' });
    animalShelter.enqueue({ type: 'dog' });
    animalShelter.enqueue({ type: 'dog' });
    expect(animalShelter.dequeue('cat')).toBeNull();
  });
  it('returns null if dequeue is called on an empty shelter', () => {
    expect(animalShelter.dequeue()).toBeNull();
  });
});
