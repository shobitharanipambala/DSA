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
  
  // const list = new LinkedList();
    
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

reversed(head){

  let prev = null;
  let current = head ;
  while (current){
    const nextNode = current.next;
    current.next = prev;
    current =nextNode ;
  }
  return prev;



}

}

// reversel (9th june)
// Initially, the reverse_recur() method is called.

// The head and tail pointers are swapped. Now, this. head points to the last node (400), and this.tail points to the first node (100).

// The recursive helper function reverseHelper() is defined.

//  The reverseHelper() function is called with current as the node 9 next to the new head (201) and prev as the new head (400).

// Inside reverseHelper(), it checks if current is null. Since it's not, it proceeds to the else block. The next variable is assigned the value of current.next, which is the

// next node after 201 (300). The current.next pointer is reversed by assigning it to prev, so now,

// the node 201 points to the previous node 400. The reverseHelper() function is called recursively with next as
//  the current node (300) and current as the previous node (201).))
// The call to reverseHelper() is added to the top of the call stack.

function reverse(node){
  if(node == null )return null;

  if(node.next == null){
    head = node ;
    return node;
  }
  
  let nodel =  reverse(node.next);
  nodel.next = node;
  return node;

  
}

























  list.push(10);
  list.push(20);
  list.push(30);
  
  console.log(list.pop());  // Output: 30
  
  list.unshift(5);
  
  console.log(list.shift()); // Output: 5
  console.log(list.get()); // Output: