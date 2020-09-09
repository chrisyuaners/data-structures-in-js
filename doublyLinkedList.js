// define Node class with value, next, and previous props
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// define DoublyLinkedList with head, tail and length props
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // takes a value and add a new Node to the end of Linked List
    push(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    // remove the last Node of the Linked List
    pop() {
        if (!this.head) return undefined;
        const removed = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const prev = removed.prev;
            this.tail = prev;
            this.tail.next = null;
            removed.prev = null;
        }
        this.length -= 1;
        return removed;
    }

    // remove a Node from the beginning of the Linked List
    shift() {
        if (this.length === 0) return undefined;
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length -= 1;
        return oldHead;
    }

    // add new Node to the beginning of Linked List
    unshift(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
        return this;
    }

    // returns a Node at a given index
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count, current;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count += 1;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.next;
                count -= 1;
            }
        }
        return current;
    }

    // replace the value of a Node in the Linked List
    set(val, index) {
        const foundNode = this.get(index);
        if (!foundNode) return false;
        foundNode.val = val;
        return true;
    }
}

const list = new DoublyLinkedList();
list.push(100);
list.push(200);
console.log(list.set(150, 2));
console.log(list);