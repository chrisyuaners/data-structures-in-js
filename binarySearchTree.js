// define Node class with value, right, and left props
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// define BST class with root prop
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // adds new Node at correct position - O(log n)
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    // find node in BTS given value - O(log n)
    find(value) {
        if (!this.root) return false;
        let current = this.root;
        let found = false;
        while (!found && current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(1);
console.log(tree);