//1200. Minimum Absolute Difference - https://leetcode.com/problems/minimum-absolute-difference/
/**
Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. 
Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr

Example 1:
Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
 */
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {    
    const result = [];
    //first sort    
    //The minimum difference will be between numbers that are close together
    arr.sort((a,b) => a-b);
    //now find the min Difference first
    let minDifference = Infinity;
    for (let i = 1; i < arr.length; i++) {
        const currentDiff = Math.abs(arr[i] - arr[i-1]);
        minDifference = Math.min(minDifference, currentDiff);
    }

    //we found the min difference in the prev loop, so 
    //now find the pair of numbers that match this new min difference
    for (let i = 1; i < arr.length; i++) {
        const currentDiff = arr[i] - arr[i-1];
        if(currentDiff === minDifference) {
            result.push([arr[i-1],arr[i] ]);
        }
    }
    return result;
};
