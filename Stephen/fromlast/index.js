// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

//INPUTS: 1 LinkedList of nodes, 1 number defining the number of spaces from the last node
//OUTPUTS: 1 node
//Output derived from input: YES
//Requirements: Return the 'middle' node of a linked list.If the list has an even number of elements, return the node at the end of the first half of the list.
//Assumptions: n will always be IN BOUNDS
//Constraints: Do not call the 'size'   method of the linked list.


//Approach: have 2 pointers, move first n positions, ONLY THEN, move both at the same time.
//Result: the second pointer should be pointing at n number of spaces from the last node 
function fromLast(list, n) {
    let first = list.head;
    let second = list.head;
    let secondCounter = 0;

    while(secondCounter !== n) {
        //move second
        second = second.next;
        secondCounter++;
    }
    //now second should be pointing to n positions, so move both pointers
    while(second.next) {//second is the last element, which is pointing to null, don't do anything with it, STOP HERE
        //move to next node
        second = second.next;
        first = first.next;
    }
    return first;
}

module.exports = fromLast;
