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

    // returns a Node at a given index - O(N)
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

    // add a new Node in the Linked List given an index - O(1)
    insert(val, index) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);
        const newNode = new Node(val);
        const prev = this.get(index - 1);
        const next = prev.next;
        newNode.next = next;
        newNode.prev = prev;
        prev.next = newNode;
        next.prev = newNode;
        this.length += 1;
        return true;
    }

    // remove a Node in the Linked List given an index - O(1)
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        const removed = this.get(index);
        const prev = removed.prev;
        const next = removed.next;
        prev.next = next;
        next.prev = prev;
        removed.next = null, removed.prev = null;
        this.length -= 1;
        return removed;
    }
}

const list = new DoublyLinkedList();
list.push(100);
list.push(200);
list.push(300);
console.log(list.remove(0));
console.log(list);