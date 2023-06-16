class Node {
    constructor(value) {
        this.value = value;
        this.pervious = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.pervious = this.tail;
            this.tail = newNode;
        }
    }
    pop() {
        if (this.tail === null) {
            return null;
        }

        const poppedNode = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;

        } else {
            this.tail = poppedNode.pervious;
            this.tail.next = null;
            poppedNode.pervious = poppedNode
        }
        return poppedNode.data;
    }

    // shift  and unshift


    shift() {
        if (this.head === null) {
            return null;
        }
        const shiftNode = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftNode.next;
            this.head.prev = null;
            shiftNode.next = null;
        }
        return shiftNode.data;
    }
    unshit() {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    //     Get and set methods
    get(index) {

        if (index <= 0 || index >= this.length()) {
            return null;
        }
        if (index <= Math.floor(this.length / 2)) {
            let currentNode = this.head;
            let currentIndex = 0;

            while (currentIndex < index) {
                currentNode = currentNode.next;

                currentIndex++;
            }
            return currentNode.data;
        } else {
            let currentNode = this.tail;
            let currentIndex = this.length - 1;

            while (currentIndex !== index) {
                currentNode = currentNode.pervious;
                currentIndex--;
            }
            return currentNode.data;
        }
    }

    set(index, data, value) {
        let node = this.get(index);

        if (node) {
            node.value = value;
            return ture;
        }
        return null;

    }

    // insert

    insert(insert, data) {
        if (index < 0 || index >= this.length()) {
            return null;

        }
        const newNode = new Node(data);

        if (index === 0) {
            newNode.next = this.head;
            this.headprev = newNode;
            this.head = newNode;
        } else if (index === this.length()) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            let current = this.head;
            let count = 0;
            while (count < index) {
                current = current.next;
                count++;
            }

            newNode.prev = current.prev;
            newNode.next = current;
            current.prev.next = newNode;
            current.prev = newNode;
        }
        return true;

    }
    remove(index) {
        if (index < 0 || index >= this.length()) {
         return null;
        }

        if(index === 0){
            removeedNode =this.head;
            this.head.pervious =null;

            if(this.head !==null){
                this.head.prev =null;
            
            }else {
            this.tail =null;
            }
        }
        elseif(index === thislength() - 1 ){
            removeNode = this.tail;
            this.tail = removedNode.prev;
            this.tail.next = null;
        } else {
            let current = this.head;
            let count = 0 ;

            while(count < index){
                current = current.next;
                count++;
            }
            removeNode = current;
            current.prev.next = current.next;
            current.prev.prev = current;
        }
        return removeNode.data;


    }


}

const list = new DoublyLinkedList();

list.push(10);
list.push(20);
list.push(30);

console.log(list.pop());
