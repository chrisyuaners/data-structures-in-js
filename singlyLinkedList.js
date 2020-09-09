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

    // get the node given the index
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let currentIndex = 0;
        let current = this.head;
        while (currentIndex !== index) {
            current = current.next
            currentIndex += 1;
        }
        return current;
    }

    // change the value of a node given the value and index
    set(val, index) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    // insert a new node at a given index - O(1)
    insert(val, index) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);
        const newNode = new Node(val);
        const prev = this.get(index - 1);
        const after = this.get(index);
        prev.next = newNode;
        newNode.next = after;
        this.length += 1;
        return true;
    }

    // remove a node at a given index - O(1) / O(N) (end of list)
    remove(index) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();
        const prev = this.get(index - 1);
        const removed = prev.next;
        prev.next = removed.next;
        this.length -= 1;
        return removed;
    }

    // reverse linked list in place
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

let list = new SinglyLinkedList();
list.push(100);
list.push(201);
list.push(250);
list.push(350);
console.log(list.remove(1));
console.log(list.reverse());