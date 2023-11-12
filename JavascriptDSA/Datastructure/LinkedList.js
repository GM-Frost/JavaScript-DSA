/** LINKED LIST

-> A linked list is a linear data structure that includes a series of connected nodes
-> Each node consists of a data value and a pointer that points to the next node
-> The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure
-> Random access of elements is not feasible and accessing an element has linear time complexity

-> Linked List data structure supports three main operations:
  - Insertion - To add an element at the beginning, end or at a given index in the list
  - Deletion - to remove an item given its index or value
  - Search - to find an element given its value

*/

/** LINKED LIST USAGE **/
// Linked list datascruture can be used for Stacks and Queues

// IMAGE VIEWER

/** LINKED LIST IMPLEMENTATION **/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Define a linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // Define method on linked list class
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  //Create node that will be added to list with value and pointer
  prepend(value) {
    const node = new Node(value);
    //If list is empty, set head to new node
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValue = " ";
      while (curr) {
        listValue += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValue);
    }
  }
}

const list = new LinkedList();

console.log("Is empty: ", list.isEmpty());
console.log("Size is: ", list.getSize());
list.print();

list.prepend(10);
list.print();

list.prepend(30);
list.prepend(40);
list.print();
