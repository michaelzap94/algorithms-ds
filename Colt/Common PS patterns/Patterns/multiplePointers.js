// Write a function called sumZero which accepts a sorted array of integers. 
// The function should find the first pair where the sum is 0. 
// Return an array that includes both values that sum to zero or undefined if a pair does not exist


// Time Complexity - O(N^2) -> 2 nested loops
// Space Complexity - O(1)
// frist loop: Get first element, and nested loop: loops through the remaining elements
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

//BETTER: Using muliple pointers -> One on the LEFT-MOST side and another on the RIGHT-MOST side, they will move to the middle
//Inputs: linear structure,targetSum
//outputs:  [X:Y]
//Requirements: We need the list to be SORTED. 
// -> SO, if we want the sum to be Smaller, move Right pointer to left. 
// -> ELSE, if we want the sum to be Bigger, move the Left pointer to right.
//Assumptions: There is at least one pair adding up to the targetSum
function sumZeroPointers(arr, targetSum = 0){
    //SORT THE ARRAY:
    arr.sort(function(a, b){return a - b});
    // When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
    // If the result is negative a is sorted before b.
    // If the result is positive b is sorted before a.
    // If the result is 0 no changes are done with the sort order of the two values.

    //Create 2 pointers
    //Left-most pointer
    let left = 0;
    //Right-most pointer
    let right = arr.length -1;

    //This should be true(as long as both pointers are not pointing to the same element) as the LIST is ordered in ASC order
    while( left < right ){//We need < instead of <= so we stop when both pointers point to the same element.
        let sum = arr[left] + arr[right];
        if(sum === targetSum){
            return [arr[left], arr[right]];
        } else if(sum > targetSum){
            //Sum is too big, so make it smaller
            //by moving the Right pointer to left
            right--;
        } else {//sum < targetSum
            //Sum is too small, so make it bigger
            //by moving the Left pointer to right
            left++;
        }
    }
    return [];
}
//Time Complexity - O(N)
//Space Complexity - O(1)

console.log(sumZeroPointers([-3,-2,-1,0,1,2,3])) // [-3,3] 
console.log(sumZeroPointers([-2,0,1,3])) // undefined
console.log(sumZeroPointers([1,2,3])) // undefined




