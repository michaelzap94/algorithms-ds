//Write a function called averagePair.  
//Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. 
//There may be more than one pair that matches the average target.

//INPUTS: array of integers, and target value.
//OUTPUTS: boolean: if there is a pair of values in the array where the average of the pair equals the target average -> true
//Output determined by input? yes
//Requirements: SORTED ARRAY
//Assumptions: input will be array, array can be empty.

//Equation to find average between a pair equals targetAvg: targetAvg = (Y + X)/2
//Array will be sorted.
function averagePairMP(arr, targetAvg){
    if(arr.length <= 1){
        return false;
    }
    //Create 2 pointers
    let left = 0;
    let right = arr.length - 1;
    //This should be true(as long as both pointers are not pointing to the same element) as the LIST is ordered in ASC order
    while( left < right ){//We need < instead of <= so we stop when both pointers point to the same element.
        const avg = (arr[left] + arr[right])/2;
        if(avg === targetAvg){
            return true;
        } else if(avg > targetAvg){
            //we need to reduce it, therefore, move the RIGTH pointer left. As, Right pointer is pointing to the biggest element.
            right--;
        } else if(avg < targetAvg){
            //we need to increase it, therefore, move the LEFT pointer rigth. As, Left pointer is pointing to the smallest element.
            left++;
        }
        
    }
    return false;
}

//Time: O(n) -> while loop, depends on the input, worst case scenario, the pair is at the end of the array(having to loop through most of it.)
//Space: O(1) -> int assignment is constant

console.log(averagePairMP([1,2,3],2.5)) // true
console.log(averagePairMP([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePairMP([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePairMP([],4)) // false
