class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}
// var first = new Node('HI');
// first.next = new Node('second element');
// first.next.next = new Node('third element');

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    //PUSHING is simple as we just:
    //1)assign the newNode to the current lastItem's .next property, 
    //2)and make the newItem the new lastItem(TAIL). 
    push(value){
        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;//(1)
            this.tail = newNode;//(2)
        }
        this.length++;
        return this;//Return the whole SinglyLinkedList
    }

    // 1)If there are no nodes in the list, return undefined
    // 2)Loop through the list until you reach the tail
    // 3)Set the next property of the 2nd to last node to be null
    // 4)Set the tail to be the 2nd to last node
    // 5)Decrement the length of the list by 1
    // 6)Return the value of the node removed
    pop(){
        if(!this.head) return undefined;//(1)
        let currentNode = this.head;
        let newTail = currentNode;
        //if currentNode.next is null(LAST ITEM/TAIL), then newTail will be the previous item
        while(currentNode.next !== null){
            newTail = currentNode;//newTail will be the currentNode, DON'T move it.
            currentNode = currentNode.next;//move to next node
        }
        newTail.next = null;//(3)
        this.tail = newTail;//(4)
        this.length--;//(5)
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return currentNode.val;//(6)
    }

    //make the PreviousNode's .next reference, the (element we want to remove)'s .next reference
    //In this case the element we want to remove is the head
    // so we just need to make the second element the new Head and decrement the length
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            //this.head = null;//not necessary as the last item should have currentHead.next = null
            this.tail = null;
        }
        return currentHead.val;
    }

    // Create a new node using the value passed to the function
    // If there is no head property on the list, set the head and tail to be the newly created node
    // Otherwise set the newly created node's next property to be the current head property on the list
    // Set the head property on the list to be that newly created node
    // Increment the length of the list by 1 AND Return the linked list
    unshift(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;//currentHead should be pointed to the newNode.next property
            this.head = newNode;//make the newNode the new head
        }
        this.length++;
        return this
    }

    // If the index is less than zero or greater than or equal to the length of the list, return null
    // Loop through the list until you reach the index and return the node at that specific index
    get(index){
        if(index<0 || index >= this.length) return null;
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){//only loop if counter !== index
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    // Use your get function to find the specific node. If the node is not found, return false
    // If the node is found, set the value of that node to be the value passed to the function and return true
    set(index, value){
        const currentNode = this.get(index);
        if(!currentNode) return false;
        currentNode.val = value;
        return true;
    }

    // If the index is less than zero or greater than the length, return false
    // If the index is the same as the length, push a new node to the end of the list
    // If the index is 0, unshift a new node to the start of the list
    // Otherwise, using the get method, access the node at the index - 1
    //  Set the next property on that node to be the new node
    //  Set the next property on the new node to be the previous next
    // Increment the length AND Return true
    insert(index, value){
        if (index < 0) {
            return false;
        } else if (index === 0) {
            return !!this.unshift(value);//!! converts value to boolean
        } else if (index === this.length) {
            return !!this.push(value);//!! converts value to boolean
        } else {
            const previousNode = this.get(index - 1);
            const newNode = new Node(value);
            newNode.next = previousNode.next;//previousNode .next Node
            previousNode.next = newNode;
            this.length++;
            return true;
        }
    }

    // If the index is less than zero or greater than the length, return undefined
    // If the index is the same as the length-1, pop
    // If the index is 0, shift
    // Otherwise, using the get method, access the node at the index - 1
    //  Set the next property on that node to be the next of the next node
    // Decrement the length AND Return the value of the node removed
    remove(index){
        if (index < 0 || index >= this.length) {
            return undefined;
        } else if (index === 0) {
            return this.shift();
        } else if (index === this.length - 1) {
            return this.pop();
        } else {
            const previousNode = this.get(index - 1);
            const toBeRemovedNode = previousNode.next;
            previousNode.next = toBeRemovedNode.next;
            this.length--;
            return toBeRemovedNode.val;
        }
    }

    // Swap the head and tail
    // Create a variable called nextNode
    // Create a variable called previousNode
    // Create a variable called currentNode and initialize it to the head property
    // Loop through the list
    // Set nextNode to be the next property on whatever currentNode is
    // Set the next property on the currentNode to be whatever previousNode is
    // Set previousNode to be the value of the currentNode variable
    // Set the currentNode variable to be the value of the nextNode variable
    // Once you have finished looping, return the list
    reverse(){
        if(!this.head) return this;
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let previousNode = null;
        let currentNode = temp;
        let nextNode = undefined;
        while(currentNode!==null){
            nextNode = currentNode.next;//currentNode.next === null means this is the last node;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }
        return this;
    }

    //prints an array of just values in the LinkedList;
    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}
var list = new SinglyLinkedList();
list.push('first');list.push('second');list.push('third');
console.log(list)// -> {head: NODE{val:'first', next:Node}, tail: NODE{val:'first', next:Node}}
console.log(list.head)// -> {val:'first', next:NODE{val:'second', next:Node}}
console.log(list.head.next)// -> {val:'second', next:NODE{val:'third', next:null}}
console.log(list.head.next.next)// -> {val:'third', next:null}