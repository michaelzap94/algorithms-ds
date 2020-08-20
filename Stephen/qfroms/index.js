// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');


//for this, we need 2 stacks, one has to be empty at all times, the other would hold the original content
class Queue {
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack(); 
    }

    add(value){
        this.stack1.push(value);
    }

    remove(){
        //while there's something in stack1, move it to stack2 temporarily
        while(this.stack1.peek()){
            this.stack2.push(this.stack1.pop());
        }
        //after this: remove the last item:
        const elementRemoved = this.stack2.pop();
        //then RESTORE stack1 with the remaining elements
        while(this.stack2.peek()){
            this.stack1.push(this.stack2.pop());
        }
        return elementRemoved;
    }

    peek(){
        //while there's something in stack1, move it to stack2 temporarily
        while(this.stack1.peek()){
            this.stack2.push(this.stack1.pop());
        }
        //after this: remove the last item:
        const elementPeeked = this.stack2.peek();
        //then RESTORE stack1 with the remaining elements
        while(this.stack2.peek()){
            this.stack1.push(this.stack2.pop());
        }
        return elementPeeked;
    }
}

module.exports = Queue;
