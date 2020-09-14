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
    if(number === 0){
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

