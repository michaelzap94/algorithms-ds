// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

//INPUTS: 1 LinkedList of nodes
//OUTPUTS: boolean
//Output derived from input: YES
//Requirements:return true if the list is circular, false if it is not.
//Assumptions: not null arguments or undefined
//Constraints: *Do not* use a counter variable, *do not* retrieve the size of the list, and only iterate through the list one time.


function circular(list) {
    let slow = list.head;
    let fast = list.head;

    //if this is not true at some point, we'll exit as it's not circular
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        //compare the node itself and not the data
        if(slow === fast){
            return true;
        }
    }
    return false;
}

module.exports = circular;
