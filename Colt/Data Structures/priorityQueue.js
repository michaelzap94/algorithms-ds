//We need a Min Binary Heap and a Node class
// Write a Min Binary Heap - lower number means higher priority.
// Each Node has a val and a priority.  Use the priority to build the heap.
// Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
// Dequeue method removes root element, returns it, and rearranges heap using priority.
class Node {
    constructor(value, priority) {
        this.val = value;
        this.priority = priority;
    }
}
class MinBinaryHeap {
    constructor(){
        this.values = [];
    }
    enqueueWithBubbleUpDep(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    enqueue(value, priority){
        const newNode = new Node(value,priority);
        this.values.push(newNode);
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1)/2);
        while(index > 0 && this.values[parentIndex].priority > priority) {
            this.values[index] = this.values[parentIndex];
            this.values[parentIndex] = newNode;
            index = parentIndex;
            parentIndex = Math.floor((index - 1)/2);
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){//if leftChild exists in Array
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){//if rightChild exists in Array
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

var newMaxBH = new MinBinaryHeap();
newMaxBH.enqueue('ANY1',41);
newMaxBH.enqueue('ANY4',18);
newMaxBH.enqueue('ANY5',27);
newMaxBH.enqueue('ANY6',12);
newMaxBH.enqueue('ANY7',55);
console.log(newMaxBH.values);
// [ Node { val: 'ANY6', priority: 12 },
// Node { val: 'ANY5', priority: 27 },
// Node { val: 'ANY4', priority: 18 },
// Node { val: 'ANY1', priority: 41 },
// Node { val: 'ANY7', priority: 55 } ]