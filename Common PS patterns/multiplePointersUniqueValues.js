// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 

// Input: Sorted Array
// Output: Int(how many unique values)
// Output Determined from: Counting the UNIQUE values in the array.
// Assumptions: There can be negative numbers in the array
// Requirements: Array will always be sorted.

//Test cases:
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4

//Solution using Multiple Pointers:

// Start with 2 pointers (i and j) at the Start of the array: (Remember: array has to be sorted.)
//  i                    i                      i                    i                    i
// [1,1,2,3,3,4,4,5] -> [1,1,2,3,3,4,4,5] -> [1,1,2,3,3,4,4,5] -> [1,2,2,3,3,4,4,5] -> [1,2,2,3,3,4,4,5] ....
//    j                      j                    j                    j                      j

// j will have to move to the right in a loop,(loop through the array)
// everytime j visits a new element we compare it with i
// -> if they are equal, ignore
// -> if they are not equal, 1) MOVE i one position to the right
//                           2) UPDATE/PUT i with the element in j, and continue the j loop

//          i
// [1,2,3,4,5,4,4,5]
//                j

function countUniqueValues(arr){
    //we assume arr is sorted.

    // if arr.length is 0, return 0
    if(arr.length === 0){
        return 0;
    }

    let i = 0;
    let j = 1;
    for (j; j < arr.length; j++) {       
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1; // as arrays start at 0, but we want to return the count of unique values by counting from 1.
}

//Time Complexity - O(N)
//Space Complexity - O(1)


