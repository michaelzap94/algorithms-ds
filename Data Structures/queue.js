//1)Implement a Queue using LinkedList:
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(value){//push() from LinkedList O(1)
        const newNode = new Node(value);
        if(this.first === null){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue(){//shift() from LinkedList O(1)
        if(this.first === null){
            return null;
        } 
        const temp = this.first;
        if(this.first === this.last){//1 node left
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}