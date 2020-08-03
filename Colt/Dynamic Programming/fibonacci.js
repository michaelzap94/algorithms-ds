//O(2^n)
function fib(nth) {
    if(nth <= 2) return 1;
    return fib(nth - 1) + fib(nth - 2);
}
// The problem is that we are repeating Operations
// 2 solutions:
// MEMOIZATION: Remember what expensive operations we have done. O(N) \
//              problem: Stackoverflow can happen.\
function fib_memo(n, memo = [undefined, 1 ,1]){
    if(memo[n] !== undefined) return memo[n];
    const result = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
    memo[n] = result;
    return result;
}
// Or
// TABULATION: Start at the base and work it up to the expensive operations \
//                  While storing previous calculated values
function fib_tabu(n){
    if(nth <= 2) return 1;
    const fib_numbers = [undefined, 1, 1];
    //start at index 3 since fib_numbers is filled till index 2
    for (let i = 3; i <= n; i++) {
        fib_numbers[i] = fib_numbers[i - 1] + fib_numbers[i - 2];
    }
    return fib_numbers[n];
}