// O(n) time & O(1) space
function reverseLinkedList(head) {
  if (!head) return null;

  let currentNode = head;
  let prevNode = null;
  let nextNode;

  while (currentNode !== null) {
    //hold a reference to the next node
    nextNode = currentNode.next;
    //assign as the next node of the current node, the prev node
    currentNode.next = prevNode;
    //move the prevNode pointer to the node we are processing 
    prevNode = currentNode;
    //the currentNode will now point to the next node that we need to process
    currentNode = nextNode;
  }
  //prevNode will be the new head
  return prevNode;
}

//// O(n) time & O(n) space
//recursive
//When reverse() reaches the end of the list, it will grab the last node as the new head and reference each node backwards.
function reverse(head) {
  if (!head || !head.next) {
    return head;
  }
  let tmp = reverse(head.next);
  head.next.next = head;
  head.next = undefined;
  return tmp;
}

// function reverseBetween(head, m, n) {
//     // O(n)
//     if (head === null || head.next === null) {
//         return head;
//     }
    
//     ListNode dummy = new ListNode(0);
//     ListNode prev = dummy;
//     dummy.next = head;
    
//     // Find the position before the reverse start
//     for (int i = 0; i < m - 1; i++) {
//         prev = prev.next;
//     }
    
//     // Reverse the n - m nodes
//     ListNode cur = prev.next;
//     for (int i = 0; i < n - m; i++) {
//         ListNode next = cur.next;
//         cur.next = next.next;
//         next.next = prev.next;
//         prev.next = next;
//     }
    
//     return dummy.next;
// }
