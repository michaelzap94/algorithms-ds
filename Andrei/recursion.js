// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

//Input: number
//Output: number
//Output derived from input: YES
//Requirements: Take the input, do some operation recursively and iteratively and output the result.
//Assumptions: input can only be a number
//Constraint:

//5* -> 5 * 4! -> 5 * 4 * 3! ... 0! -> 1

function findFactorialRecursive(number) {
  //base case: 0! -> 1
  if (number === 0) {
    return 1;
  }
  //factorial operation has to take a different input.
  return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialRecursive(5));

function findFactorialIterative(number) {
  let answer = 1;
  //Start at the base: 1 AND THEN work it up to the complex operation.
  for (let i = 1; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}
console.log(findFactorialIterative(5));
//===========================================================================
//Fibonacci:
// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3
//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
    //Start at the base: 0 AND THEN work it up to the complex operation.
    //first prefill the array with the base results, then start at the next index 2
    let arr = [0,1];
    for (let i = 2; i < n + 1; i++) {
        //now push the result of the new number to the next slot
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr[n];
}
console.log(fibonacciIterative(8));

function fibonacciRecursive(n) {
  //base case:
  if(n < 2) return n;//if n is 0 -> 1, if 1 -> 1, otherwise do some calculations
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log(fibonacciRecursive(8));
