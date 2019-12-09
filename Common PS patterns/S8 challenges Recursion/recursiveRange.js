//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

function recursiveRange(n){
   //base case
    if(n === 0) return 0;
   //factorial
   return n + recursiveRange(--n);
}

//if recursiveRange(3) -> 3 + recursiveRange(2) -> 3 + (2 + recursiveRange(1)) -> 3 + (2 + (1 + recursiveRange(0))) -> 3 + (2 + (1 + (return 0))) -> 6

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

