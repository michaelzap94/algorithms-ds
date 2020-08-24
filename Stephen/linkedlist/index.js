// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document
class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    insertFirst(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    size(){
        let counter = 0;
        let node = this.head;
        //traverse through the LinkedList
        while(node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if (!this.head) {
            return null;
        }
        let node = this.head;
        //traverse through the LinkedList
        while(node.next) {//we'll exit the loop when node.next = null
            node = node.next;
        }
        return node;
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if(!this.head) return;
        this.head = this.head.next;
    }

    removeLast(){
        if (!this.head) {
            return;
        }
        //create 2 pointers
        let prev = this.head;
        let node = prev.next;
        //can be null if only one element
        if(!node){
            this.head = null;
            return;
        }
        //traverse through the LinkedList
        while(node.next) {//we'll exit the loop when node.next = null, meaning node is the last node
            prev = node;
            node = node.next;
        }
        prev.next = null;
    }

    insertLast(data){
        const newNode = new Node(data);
        const lastNode = this.getLast();

        if (!lastNode) {
            this.head = newNode;
        } else {
            lastNode.next = newNode;
        }
    }

    getAt(index){
        let counter = 0;
        let node = this.head;
        while(node){
            //node at this index; return
            if(counter === index){
                return node;
            }
            //else, move to next node
            counter++;
            node = node.next;
        }
        //if nothing was found
        return null;
    }

    removeAt(index){
        const length = this.size();
        //out of bounds
        if(index < 0 || index >= length) {
            return;
        } else if(index === 0) {//remove head
            this.removeFirst();
        } else if(index === (length - 1)){//remove tail
            this.removeLast();
        } else {
            //remove at index, use previous index
            const prev = this.getAt(index - 1);
            //if not node at index or it does not have a next property, return
            if(!prev || !prev.next){
                return;
            }
            const nodeToDelete = prev.next;
            prev.next = nodeToDelete.next;
            //nodeToDelete.next = null;//optional, to remove references
        }
    }
}

module.exports = { Node, LinkedList };
