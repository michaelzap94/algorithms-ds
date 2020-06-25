// Write a function called minSubArrayLen
// which accepts two parameters - an array of positive integers and a positive integer. 
// This function should return the minimal length of a contiguous  subarray of which the sum is greater than or equal to the integer passed to the function. 
// If there isn't one, return 0 instead.

function minSubArrayLen(nums, sum){
    let start = 0;//window start
    let end = 0;//window end
    let total = 0;//window value
    let minlen = Infinity;
    
    while(start < nums.length) {
        if(total < sum && end < nums.length){
            //increase window value
            total = total + nums[end];
            //expand window
            end++;
        } else if(total >= sum) {
            //we found a value that can be returned: len
            minlen = Math.min(minlen, end - start);
            //reduce window value as we'll get rid of the start when sliding the window
            total = total - nums[start];
            //shrink window
            start++;
        } else {
            break;
        }
    }
    return (minlen === Infinity) ? 0 : minlen;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7));
console.log(minSubArrayLen([2,1,6,5,4], 9));
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52));
