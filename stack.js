// define Node class with value and next props
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// define Stack class with first, last and size props
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // add Node to the top of Stack - O(1)
    push(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return this.size += 1;
    }

    // remove the last Node added to the Stack - O(1)
    pop() {
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

const stack = new Stack();
stack.push(3);
stack.push(2);
stack.push(1);
stack.pop();
console.log(stack);