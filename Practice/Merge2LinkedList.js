class LinkedList{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

function mergeLinkedLists(headOne, headTwo) {
    // Write your code here.
          //first pointers will be the head
      let p1 = headOne;
      let p2 = headTwo;
          //will switch linkedlists
      let p1Prev = null; 
      while(p1 !== null && p2 !== null) {
          if(p1.value < p2.value) {
            //attach prev to p1
              p1Prev = p1;
              //move to next node
              p1 = p1.next;
          } else {
            //if prev not null, append the whole p2 linkedlist to it.
              if(p1Prev !== null) p1Prev.next = p2;
            //reference prev1 to p2 linkedlist
              p1Prev = p2;
              //move p1Prev and p2 to next node, this will also make prev move to p2.next
              p2 = p2.next;
              //prev.next will now point to the whole p1 linkedlist again
              p1Prev.next = p1;
          }
      }
      //if p1 ended in null it's because it was a shorter linkedlist.
    //just append the rest of the p2 linkedlist
      if(p1 === null) p1Prev.next = p2;
        //we don't do this if p2 ended in null, because, it that was the case, loop would end, 
        //and the last thing we do in the else is append the whole p1 linkedlist
  
        //return the first linkedlist modified, as this will have all the changes we made
      return (headOne.value < headTwo.value) ? headOne : headTwo;
  }