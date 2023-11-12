/** STACK
* 
 -> The stack data structure is a sequential collection of elements that follows the principle of LAST IN FIRST OUR (LIFO)
 -> The last element inserted into the stack is first element to be removed
 -> Stacks are commonly used to implement undo and undo/redo operations
 -> A stack of platses -> The last plate placed on top of the stack is also the first plate removed from the stack
 -> Stack is an abstract data types. It is defined by its behavior rather than being a mathematical model.
 -> The stack data structure supports two main operations: Push (which adds element to the collection), Pop(Which  removes the most recently added element from the collection)
*/

/** STACK - (QUEUE)
* 
 -> The queue data structure is a sequential collection of elements that follows the principle of FIRST IN FIRST OUT(FIFO)
-> THe first element inserted into the queue is first element to be removed
-> A queue of people. People enter the queue at one end (rear/tail) and leave the queue from the other end (front/head)
-> Queue is an abstract data type. It is defined by its behavior rather than being a mathematical model
-> The Queue data structure supports two main operations
 - Enqueue, which adds an eleement to the rear/tail of the collections
 - Dequeue, which removes an element from the front/head of the collection
*/

/** QUEUE USUAGE

 -> Printers
 -> CPU Task scheduling
 -> Call back queue in javaScript runtime

*/

/** STACK IMPLEMENTATION
* 
 -> Stacks are implemented using arrays
 -> Stacks are LIFO (Last In First Out)
 -> Stacks are collections of elements with the following operations:
 -> Push (add element to the collection)
 -> Pop (remove the most recently added element from the collection)
 -> peek (return the most recently added element from the collection)
 -> length (return the number of elements in the collection)
 -> isEmpty (check if the collection is empty)
 -> print (print the elements of the collection)
*/

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift(); //Removes and returns element from beginning of Array
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      // Show the front of the queue
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
