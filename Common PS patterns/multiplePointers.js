// Write a function called sumZero which accepts a sorted array of integers. 
// The function should find the first pair where the sum is 0. 
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

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
//Assumptions: There is at least one pair adding up to the targetSum

function sumZero(arr, targetSum = 0){
    //SORT THE ARRAY:
    arr.sort();//will sort the original array in ASC
    //Create 2 pointers
    //Left-most pointer
    const left = 0;
    //Right-most pointer
    const right = arr.length -1;

    while( left < right ){

    }


}




