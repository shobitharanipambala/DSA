class Node{
    constructor(value){
        this.value = value;
        this.pervious  = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    push(data){
        const newNode = new Node(data);

        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.pervious=this.tail;
            this.tail = newNode;
        }
    }
    pop(){
        if(this.tail === null){
            return null;
    }
     
    const poppedNode = this.tail;
    if (this.head === this.tail){
        this.head = null;
        this.tail = null;

    }else{
        this.tail = poppedNode.pervious;
        this.tail.next =null;
        poppedNode.pervious= poppedNode
    }
    return poppedNode.data;
    }
}

const list = new DoublyLinkedList();

list.push(10);
list.push(20);
list.push(30);

console.log(list.pop());