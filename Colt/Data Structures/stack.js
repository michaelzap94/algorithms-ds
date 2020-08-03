//1)Implement a Stack using LinkedList:
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value){//unshift() from LinkedList O(1)
        const newNode = new Node(value);
        if(this.first === null){
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size;
    }
    pop(){//shift() from LinkedList O(1)
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
