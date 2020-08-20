// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

//INPUTS: 2 Queues
//OUTPUTS: 1 Queue with alternating content
//Output derived from input: YES
//Requirements: handle queues of different lengths without inserting 'undefined'
//Assumptions: not null arguments, different lengths
//Constraints: can only use add(), remove(), and peek() -> so no .length

function weave_long(sourceOne, sourceTwo) {
    const finalQueue = new Queue();
    let oneRemoved = sourceOne.remove();
    let twoRemoved = sourceTwo.remove();
    while(oneRemoved || twoRemoved){
        if(typeof oneRemoved !== undefined) finalQueue.add(oneRemoved); 
        if(typeof twoRemoved !== undefined) finalQueue.add(twoRemoved);
        oneRemoved = sourceOne.remove();
        twoRemoved = sourceTwo.remove();
    }
    return finalQueue;
}//takes a tiny bit of space with oneRemoved and twoRemoved, but reassigning so not a concern

function weave(sourceOne, sourceTwo) {
    const finalQueue = new Queue();
    while(oneRemoved.peek() || twoRemoved.peek()){
        if(oneRemoved.peek()) finalQueue.add(sourceOne.remove()); 
        if(twoRemoved.peek()) finalQueue.add(sourceTwo.remove());
    }
    return finalQueue;
    
}//does not take space in memory

module.exports = weave;
