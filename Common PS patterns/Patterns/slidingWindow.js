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

//SLOW SOLUTION, NESTED LOOPS -> O(N^2)
function maxSubarraySumSLOW(arr, num){
    if(num > arr.length){
        return null;
    }
    //There is no MAX
    let max = -Infinity;
    // Infinity is a numeric value that represents positive infinity.(number exceeds the upper limit of floating point, 1.797693134862315E+308.)
    // -Infinity is a numeric value that represents negative infinity.(number exceeds the lower limit of floating point, -1.797693134862316E+308.)
    const stopBeforeLastElementConsideringNum = (arr.length - num) + 1;
    for (let i = 0; i < stopBeforeLastElementConsideringNum; i++) {
        let tempSum = 0;
        for (let j = 0; j < num; j++) {
            tempSum += arr[i + j]; //count from i onwards
        }
        if(tempSum > max){
            max = tempSum;
        }

    }
    console.log(max);
    return max;
}
//Time Complexity - O(N^2)
//Space Complexity - O(N^2)
//===============================================
//FAST SOLUTION - O(N)
function maxSubarraySum(arr, num){
    if(num > arr.length){
        return null;
    }
    //There is no MAX
    let maxSum = 0;
    let previousSum = 0;
    //First time: you HAVE TO SUM
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    previousSum = maxSum;
    //Second time onwards: SLIDE by using the previous Sum
    //The initial i will be num, because that's the MAX number of elements in FIRST loop
    for (let i = num; i < arr.length; i++) {
        const firstElementOfPreviousWindow = arr[i-num];//if num=4--> 1:4-4=0, 2: 5-4=1, 3: 6-4=2, etc
        const lastElementOfThisNewWindow = arr[i];//if num=4 --> 1:arr[4], 2:arr[5]. it's lastElementOfThisNewWindow because in FIRST loop: cond: i < num NOT i<=num
        //previousSum will be this Sum for the next iteration
        previousSum = previousSum - firstElementOfPreviousWindow + lastElementOfThisNewWindow;
        //assign to maxSum the bigge sum
        maxSum = Math.max(previousSum, maxSum);
    }
    console.log(maxSum);
    return maxSum;
}
