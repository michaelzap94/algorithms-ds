class Node{
    constructor(value){
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}
// var first = new Node('HI');
// first.next = new Node('second element');
// first.next.next = new Node('third element');

class DoublyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    // Create a new node with the value passed to the function
    // If the head property is null set the head and tail to be the newly created node 
    // If not, set the next property on the tail to be that node
    // Set the previous property on the newly created node to be the tail
    // Set the tail to be the newly created node
    // Increment the length AND Return the Doubly Linked List
    push(value){
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            //newNode.next = null; not needed |-> new Node(val) will set it to null
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // If there is no head, return undefined
    // Store the current tail in a variable to return later
    // If the length is 1, set the head and tail to be null
    // Otherwise, Update the tail to be the previous Node.
    // Set the newTail's next to null
    // Decrement the length AND Return the value removed
    pop(){
        if(!this.head) {
            return undefined;
        }
        const toBeRemovedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = toBeRemovedNode.prev;
            this.tail.next = null;
            toBeRemovedNode.prev = null;//we want to SEVER the ties.
            //toBeRemovedNode.next will be null already
        }
        this.length--;
        return toBeRemovedNode;
    }

    // If length is 0, return undefined
    // Store the current head property in a variable (we'll call it old head)
    // If the length is 1, set the head and tail to be null
    // Otherwise, Update the head to be the next of the old head
    // Set the head's prev property to null
    // Set the old head's next to null
    // Decrement the length AND Return old head
    shift(){
        if(!this.head) {
            return undefined;
        }
        const toBeRemovedNode = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = toBeRemovedNode.next;
            this.head.prev = null;
            toBeRemovedNode.next = null;//we want to SEVER the ties.
            //toBeRemovedNode.prev will be null already
        }
        this.length--;
        return toBeRemovedNode;
    }

    // Create a new node with the value passed to the function
    // If the length is 0
    //  Set the head to be the new node
    //  Set the tail to be the new node
    // Otherwise
    //  Set the prev property on the head of the list to be the new node
    //  Set the next property on the new node to be the head property 
    //  Update the head to be the new node
    // Increment the length AND Return the list
    unshift(value){
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            //newNode.prev = null; not needed |-> new Node(val) will set it to null
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // If the index is less than 0 or greater or equal to the length, return null
    // If the index is less than or equal to half the length of the list
    //  Loop through the list starting from the head and loop towards the middle
    //  Return the node once it is found
    // If the index is greater than half the length of the list
    // ​ Loop through the list starting from the tail and loop towards the middle
    //  Return the node once it is found
    get(index){
        if(index < 0 || index >= this.length){
            return null;
        }
        const halfIndex = Math.round(this.length / 2);
        if(index < halfIndex){//first half, traverse as normal.
            let currentNode = this.head;
            for (let i = 0; i < halfIndex; i++) {
                if(index === i){
                    return currentNode;
                }
                currentNode = currentNode.next;
            }
        } else {//second half, you have to work it out backwards
            let currentNode = this.tail;
            for (let i = this.length-1; halfIndex >= i; i--) {
                if(index === i){
                    return currentNode;
                }
                currentNode = currentNode.prev;
            }
        }
    }

    // Create a variable which is the result of the get method at the index passed to the function
    // If the get method returns a valid node, set the value of that node to be the value passed to the function
    //     Return true
    // Otherwise, return false
    set(index, value){
        const currentNode = this.get(index);
        if(!currentNode){
            return false;
        } else {
            currentNode.val = value;
            return true;
        }

    }

    
    // If the index is less than zero or greater than or equal to the length return false
    // If the index is 0, unshift
    // If the index is the same as the length, push
    // ELSE, Use the get method to access the index -1
    // Set the next and prev properties on the correct nodes to link everything together
    // Increment the length AND Return true
    insert(index, value){
        if(index < 0 || index > this.length){
            return false;
        } else if(index === 0){
            return !!this.unshift(value);
        } else if(index === this.length){
            return !!this.push(value);
        } else {
            const newNode = new Node(value);
            const previousNode = this.get(index - 1);
            const nextNode = previousNode.next;
            newNode.next = nextNode;
            newNode.prev = previousNode;
            previousNode.next = newNode;
            nextNode.prev = newNode;
            this.length++;
            return true;
        }
    }

    // If the index is less than zero or greater than or equal to the length return undefined
    // If the index is 0, shift
    // If the index is the same as the length-1, pop
    // Use the get method to retrieve the item to be removed
    // Update the next and prev properties to remove the found node from the list
    // Set next and prev to null on the found node
    // Decrement the length AND Return the removed node.
    remove(index){
        if(index < 0 || index >= this.length){
            return undefined;
        } else if(index === 0){
            return this.shift();
        } else if(index === this.length - 1){
            return this.pop();
        } else {
            const removedNode = this.get(index);
            const previousNode = removedNode.prev;
            const nextNode = removedNode.next;
            previousNode.next = nextNode;
            nextNode.prev = previousNode;
            removedNode.next = null;//so we remove all linkage when returning
            removedNode.prev = null;//so we remove all linkage when returning
            this.length--;
            return removedNode;
        }
    }
}
var list = new DoublyLinkedList();
list.push('first');list.push('second');list.push('third');
console.log(list)// -> DoublyLinkedList {length: 3,
    // head: Node {val: 'first',
    //    next: Node { val: 'second', next: [Node], prev: [Circular] },
    //    prev: null },
    // tail: Node {val: 'third',
    //    next: null,
    //    prev: Node { val: 'second', next: [Circular], prev: [Node] } } }