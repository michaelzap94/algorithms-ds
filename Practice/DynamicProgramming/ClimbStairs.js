//https://leetcode.com/problems/climbing-stairs/
//70. Climbing Stairs
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //bottom up
    //have a base case and build your way up to the target
    //store how many ways are there to climb, one step or two steps, etc...
    let dp =[];//maximum length n + 1
    dp[0] = 1;//there is one way to climb 0 steps
    dp[1] = 1;//there is one way to climb 0 steps
    //dp[2] = 2;//there are 2 ways to climb 2 steps; and so on
    //how many ways are there to climb 3 steps, up until n steps
    for(let i = 2; i <= n; i++) {
        //the only way to come to dp[i] is to use the solutions we have stored from prev calculations in:
        //dp[i-1] and dp[i-2]; 
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n];
};