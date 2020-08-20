// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

//you should use a LinkedList as removing from the beginning is O(n) for Arrays
//using Arrays you shoul use, unshift and pop
class Queue {
    constructor(){
        this.values = [];
    }

    //FIFO, so first in, first out, therefore add a
    add(value){
        this.values.unshift(value);
    }

    remove(){
        return this.values.pop();
    }
}

//USING linked list
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// class Queue {
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.length = 0;
//     }

//     //FIFO, so first in, first out, therefore add a
//     add(value){

//     }

//     remove(){
        
//     }
// }

module.exports = Queue;
