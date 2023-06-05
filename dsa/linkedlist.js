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
    
  get(index){
    if(index < 0 || index >= this.length){
        return null;
    }
    let counter = 0;
    let current = this.head;
    while(counter !== index){
        current = current.next;
        counter++;
    }
    return current;
}
    set(index, val) {
    var Node = this.get(index);
    if (Node) {
      Node.val = val;
      return true;
    }
    return false;
}

insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
}


list.push(10);
  list.push(20);
  list.push(30);
  
  console.log(list.pop());  // Output: 30
  
  list.unshift(5);
  
  console.log(list.shift()); // Output: 5
  console.log(list.get()); // Output: