// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);

    }

    size() {
        let count = 0;
        let node = this.head;

        // while next node exists
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    getFirst() {
        // return this.head;
        // or with code reuse
        return this.getAt(0);
    }

    getLast() {
        // let node = this.head;

        // while (node && node.next) {
        //     node = node.next;
        // }

        // return node;
        // or with code reuse
        return this.getAt(this.size() - 1);
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        // this.head = this.head ? this.head.next : null;
        this.head = this.getAt(1);
    }

    removeLast() {
        if (this.head && this.head.next) {
            let current = this.head;
            let nextNode = this.head.next;

            while (nextNode && nextNode.next) {
                current = nextNode;
                nextNode = nextNode.next;
            }

            current.next = null;
        } else {
            this.head = null;
        }
    }

    insertLast(data) {
        const last = this.getLast();

        if (!last) {
           return this.insertFirst(data);
        }
        last.next = new Node(data);
    }

    getAt(int) {
        let count = 0;
        let node = this.head;

        while (node) {
            if (int === count) {
                return node;
            }
            count++;
            node = node.next;
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.removeFirst();
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        if (!this.head || index === 0) {
            this.insertFirst(data);
            return;
        }
        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }
}
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
list.insertAt('Hi', 0);
list.getAt(1); // returns node with data 'Hi'

module.exports = { Node, LinkedList };
