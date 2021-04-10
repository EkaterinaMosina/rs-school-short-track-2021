// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const list = new ListNode(element);
    if (!this.head) {
      this.head = list;
      this.tail = list;
    } else {
      this.tail.next = list;
      this.tail = this.tail.next;
    }
    this.length++;
  }

  dequeue() {
    const deleted = this.head.value;
    this.head = this.head.next;
    this.length--;
    return deleted;
  }
}

module.exports = Queue;
