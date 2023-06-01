class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    push(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    pop() {
      if (!this.head) {
        return undefined;
      }
  
      let current = this.head;
      let previous = null;
  
      while (current.next) {
        previous = current;
        current = current.next;
      }
  
      if (previous) {
        previous.next = null;
        this.tail = previous;
      } else {
        this.head = null;
        this.tail = null;
      }
  
      return current.data;
    }
  
    shift() {
      if (!this.head) {
        return undefined;
      }
  
      const current = this.head;
      this.head = current.next;
  
      if (!this.head) {
        this.tail = null;
      }
  
      return current.data;
    }
  
    unshift(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
    }
  }
  const list = new LinkedList();

  list.push(10);
  list.push(20);
  list.push(30);
  
  console.log(list.pop());  // Output: 30
  
  list.unshift(5);
  
  console.log(list.shift()); // Output: 5
  