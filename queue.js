// define Node class with value and next props
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// define Queue class with first, last, and size props
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // add a Node to the end of the Queue - O(1)
    enqueue(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return this.size += 1;
    }

    // remove Node from the beginning of the Queue - O(1)
    dequeue() {
        if (!this.first) return null;
        const temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size -= 1;
        return temp.value;
    }
}

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.dequeue();
// console.log(queue);

export default Queue;