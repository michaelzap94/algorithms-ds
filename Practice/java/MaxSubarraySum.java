//https://leetcode.com/problems/maximum-subarray/
/**
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
 */
class Solution {
    //O(n) | O(n)
    public int maxSubArray(int[] nums) {
        //edge cases
        if(nums.length == 0) return 0;
        if(nums.length == 1) return nums[0];
        int[] max_sums = new int[nums.length];
        int max_int = nums[0];
        //base case
        max_sums[0] = max_int;
        for(int i = 1; i < nums.length; i++) {
            //max_sums[i] -> Max of (curent number alone, OR current + last element)
            max_sums[i] = Math.max(nums[i], nums[i] + max_sums[i - 1]);
            //this new number or the existing one is the max?
            max_int = Math.max(max_int, max_sums[i]);
        }
        return max_int;
    }
}