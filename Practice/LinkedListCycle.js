/**
 * @param {ListNode} head
 * @return {boolean}
 */
/* Time is O(n), Space is O(1) */
const hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};