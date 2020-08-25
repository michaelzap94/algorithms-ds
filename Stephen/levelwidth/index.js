// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

//To meassure the width we need:
//Array counters -> counts the number of nodes at each level
//Separator -> element in the queue to indicate we have processed everything at one level
//Queue to process the nodes and separator
function levelWidth(root) {
    const counters = [0];//initiate first bucket
    const SEPARATOR = 'S';
    //1st level will start with the root
    const queue = [root, SEPARATOR];

    //traverse through the nodes
    //if the SEPARATOR is the only thing left, then no more children, end while loop
    while(queue.length > 1){
        const currentNode = queue.shift();

        //move to next level if we reached the SEPARATOR
        if(currentNode === SEPARATOR) {
            //now move the separator to the end of the queue again
            queue.push(SEPARATOR);
            //create new bucket for counters
            counters.push(0);
        } else {
            queue.push(...currentNode.children);
            counters[counters.length - 1]++;
        }        
    }
    return counters;
}

module.exports = levelWidth;
