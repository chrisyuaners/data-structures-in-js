// define Node class with value and next properties
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// define SinglyLinkedList class with length, head, and tail props
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // push a new node to the end of the linked list
    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;
        return this;
    }

    // remove the last node of the linked list
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let prev = current;
        while (current.next) {
            prev = current;
            current = current.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length -= 1;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // remove node head from linked list
    shift() {
        if (!this.head) return undefined;
        const oldHead = this.head;
        this.head = oldHead.next;
        this.length -= 1;
        if (this.length === 0) {
            this.tail = null;
        }
        return oldHead;
    }

    // add node to beginning of linked list
    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
        return this;
    }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.shift();
list.shift();
list.shift();
list.unshift(1);
list.unshift(2);
console.log(list);