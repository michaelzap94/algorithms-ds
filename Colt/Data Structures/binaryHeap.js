class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }

    // Push the value into the values property on the heap
    // Bubble Up:
    //  Create a variable called index which is the length of the values property - 1
    //  Create a variable called parentIndex which is the floor of (index-1)/2
    //  Keep looping as long as the values element at the parentIndex is less than the values element at the child index
    //  and there's at least one value already.index > 0 (since we will first push,index = first time : 0, second time: 1)
    //      Swap the value of the values element at the parentIndex with the value of the element property at the child index
    //      Set the index to be the parentIndex, and start over!
    insert(value){
        this.values.push(value);
        let index = this.values.length - 1;//index of new element will be the LAST one
        let parentIndex = Math.floor((index - 1) / 2);//index of parent of new element
        while(this.values[parentIndex] < value && index > 0){
            this.values[index] = this.values[parentIndex];//swap parent for child
            this.values[parentIndex] = value;//swap child for parent
            index = parentIndex;//new index of element would be the parentIndex
            parentIndex = Math.floor((index - 1) / 2);//index of parent of new element
        }
    }

    // Swap the first value in the values property with the last one
    // Pop from the values property, so you can return the value at the end.
    // Have the new root "sink down" to the correct spot...​
    //  Your parent index starts at 0 (the root)
    //  Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
    //  Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
    //  If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
    //  The child index you swapped to now becomes the new parent index.  
    //  Keep looping and swapping until neither child is larger than the element.
    //  Return the old root!
    extractMax(){
        const maxValue = this.values[0];
        const lastElement = this.values.pop();
        if(this.values.length === 0) return undefined;
        this.values[0] = lastElement;//last element will be new Root
        let elementToBubbleDownIndex = 0;
        while(true){
            let leftChildIndex = (2 * elementToBubbleDownIndex) + 1;
            let rightChildIndex = (2 * elementToBubbleDownIndex) + 2;
            let leftChild = this.values[leftChildIndex];
            let rightChild = this.values[rightChildIndex];
            let elementToBubbleDown = this.values[elementToBubbleDownIndex];
            if(leftChild > elementToBubbleDown && rightChild > elementToBubbleDown){
                if(rightChild > leftChild){
                    this.values[elementToBubbleDownIndex] = rightChild;
                    this.values[rightChildIndex] = elementToBubbleDown;
                    elementToBubbleDownIndex = rightChildIndex;
                } else {
                    this.values[elementToBubbleDownIndex] = leftChild;
                    this.values[leftChildIndex] = elementToBubbleDown;
                    elementToBubbleDownIndex = leftChildIndex;
                }
            } else if(leftChild > elementToBubbleDown) {
                this.values[elementToBubbleDownIndex] = leftChild;
                this.values[leftChildIndex] = elementToBubbleDown;
                elementToBubbleDownIndex = leftChildIndex;
            } else if( rightChild > elementToBubbleDown){
                this.values[elementToBubbleDownIndex] = rightChild;
                this.values[rightChildIndex] = elementToBubbleDown;
                elementToBubbleDownIndex = rightChildIndex;
            } else {
                break;
            }
        }
        return maxValue;
    }
}

var newMaxBH = new MaxBinaryHeap();
newMaxBH.insert(41);
newMaxBH.insert(39);
newMaxBH.insert(33);
newMaxBH.insert(18);
newMaxBH.insert(27);
newMaxBH.insert(12);
newMaxBH.insert(55);
console.log(newMaxBH.values);// [ 55, 39, 41, 18, 27, 12, 33 ]

console.log(newMaxBH.extractMax()); // * 7 ==>
// 55
// [ 41, 39, 33, 18, 27, 12 ]
// 41
// [ 39, 27, 33, 18, 12 ]
// 39
// [ 33, 27, 12, 18 ]
// 33
// [ 27, 18, 12 ]
// 27
// [ 18, 12 ]
// 18
// [ 12 ]
// 12
// []