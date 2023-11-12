/** CIRCULAR QUEUE

-> The size of the queue is fixed and a single block of memory is used as if the first element is connected tot the last element
-> Also referred to as a circular buffer or ring buffer and follows the FIFO principle
-> A circular queue will reuse the empty block created during the dequeue operation
-> When working with queues of FIXED MAXIMUM SIZE, a circular queue is a great implementation choice
-> The Circular Queue data structure supports two main operations
  - Enqueue, which adds an element to the rear/tail of the collections
  - Dequeue, which removes an element from the front/head of the collections
*/

/** ---- CIRCULAR QUEUE USUAGE ---- */
// Clock
// Streaming Data
// Traffic Lights

/** ---- CIRCULAR QUEUE IMPLEMENTATION ---- */

class CircularQueue {
  constructor(capacity) {
    //Initialize new List

    // Array to store elements in Fixed size
    this.items = new Array(capacity);
    this.capacity = capacity;

    this.currentLength = 0;
    //Two Pointers
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.isFull());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());

queue.print();

queue.enqueue(60);
queue.print();
