// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }


//INPUTS: 1 LinkedList of nodes
//OUTPUTS: 1 node
//Output derived from input: YES
//Requirements: Return the 'middle' node of a linked list.If the list has an even number of elements, return the node at the end of the first half of the list.
//Assumptions: not null arguments or undefined
//Constraints: *Do not* use a counter variable, *do not* retrieve the size of the list, and only iterate through the list one time.

function midpoint(list) {
    //iterate through the nodes
    let slow = list.head;
    let fast = list.head;
    //loop will end if either of the pointers are null
    while(fast.next && fast.next.next) {
        //move to next node
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

module.exports = midpoint;
