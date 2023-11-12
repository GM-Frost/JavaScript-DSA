// DEQUEUE has constant Time complexity which is not favorable

class Queue {
  constructor() {
    this.items = {};
    this.rear = 0; //Pointer
    this.front = 0; //Pointer
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}

// Create new Instance of class
const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();

console.log(queue.dequeue());

console.log(queue.peek());
