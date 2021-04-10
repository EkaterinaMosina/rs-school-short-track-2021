/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(element) {
    if (this.size >= 1) {
      this.storage[this.size + 1] = element;
    } else {
      this.size = 0;
      this.storage = {};
      this.storage[1] = element;
    }
    this.size++;
  }

  pop() {
    const popped = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return popped;
  }

  peek() {
    return this.storage[this.size];
  }
}

module.exports = Stack;
