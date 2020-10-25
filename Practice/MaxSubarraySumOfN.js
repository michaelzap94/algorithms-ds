// Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
// The function should calculate the maximum sum of n consecutive elements in the array.

// Input: unsorted/sorted array, number n (used to identify how many elements we want to sum)
// Output: Int(maximum sum of n consecutive elements in the array)
// Output Determined from:  SLOW -> loop through array, then nested loop to sum(Keeping track of the: MAX sum -> Comparing a Temp variable with current MAX)
//                          FAST -> Slide Window-> 1) loop through array, -> calculate the sum of First subset, Move to second subset
//                                                 2) SUBSTRACT the FIRST element of previous subset and ADD the LAST element of new subset
// Both (slow and fast) -> do not go beyond the number n (used to identify how many elements we want to sum)
// Assumptions: Input will not be null, or invalid, always an array
// Requirements: None

//Test cases:
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null

function maxSubarraySum(array, consecutive) {
    if(consecutive > array.length){
        return null;
    }
    let maxSum = 0;
    let latestSum = 0;

    //First time: you HAVE TO SUM, Create the first window
    for (let i = 0; i < consecutive; i++) {
        latestSum = latestSum + array[i];
    }
    //at this point, max === latest
    maxSum = latestSum;
    
    for (let j = consecutive; j < array.length; j++) {
        latestSum = latestSum - array[j-consecutive] + array[j];
        maxSum = Math.max(maxSum, latestSum);
    }

    return maxSum;
}