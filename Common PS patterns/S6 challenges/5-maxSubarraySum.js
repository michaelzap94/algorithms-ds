//Sliding Window - maxSubarraySum
//Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function. 
//Note that a subarray must consist of consecutive elements from the original array. 
//In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not. 

//INPUTS: array, number
//OUTPUTS: number
//can the output be derived from the input? yes
//Requirements: array can only contain integers (+ or -)
//Assumptions: array can be empty, array will not be null, number will not be null

//Naive solution: 2 nested loops -> do B chunks of work(this) for each time you do A chunks of work(that) 

//Better solution: sliding windows. 2 separate for loops. FORMULA for new WINDOW sum: oldSum - firstEofoldWindow + lastElementOfNewWindow

function maxSubarraySum(arr, n){
    //if array length is less than n, return null: ([1,2], 2) OK, but ([1,2],3) WRONG
    if(arr.length < n) return null;

    //INIT a maxSum variable and oldSum(keep track of this) variable
    let maxSum = 0; 
    let oldWindowSum = 0;

    //FIRST LOOP: Calculate first window's sum, from beggining of Arr to n
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];        
    }
    //oldWindowSum will be the maxSum for now
    oldWindowSum = maxSum;

    //SECOND LOOP: 1) Calculate next sums using the formula. 2) Compare the maxSum to the oldWindowSum, to use as the latest maxSum.
    //We need to SLIDE and the new window's last element will be n.

    for (let i = n; i < arr.length; i++) {
        const firstElementOfPreviousWindow = arr[i-n];//if n=4--> 1:4-4=0, 2: 5-4=1, 3: 6-4=2, etc
        const lastElementOfThisNewWindow = arr[i];//if n=4 --> 1:arr[4], 2:arr[5]. it's lastElementOfThisNewWindow because in FIRST loop: cond: i < n NOT i<=n
        //The new Windows sum calculate from the formula, will be the next's oldWindowSum
        oldWindowSum = oldWindowSum - firstElementOfPreviousWindow + lastElementOfThisNewWindow;
        //maxSum will be the max between this new oldWindowSum or the current maxSum
        maxSum = Math.max(oldWindowSum, maxSum); 
    }

    return maxSum;

}
//Time Complexity - O(N) Space Complexity - O(1)

//Test cases
console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null 
