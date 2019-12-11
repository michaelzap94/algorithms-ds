// This function accepts a sorted array and a value
// 1) Create a left pointer at the start of the array, and 2) a right pointer at the end of the array
// While the left pointer comes before the right pointer: left <= rigth
// Create a pointer in the middle
// If you find the value you want, return the index
// If the value is too small, move the left pointer up
// If the value is too large, move the right pointer down
// If you never find the value, return -1

//Exercise
//Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists.Otherwise, return -1. 
function binarySearch(arr, e){
    if(arr.length === 0) return -1;
    //FIRST INIT the right, left and middle indexes. AND, compare in the while loop the elements next to the middle element.
    let leftMostIndex = 0;
    let rigthMostIndex = arr.length - 1;
    let middleIndex = Math.floor( (rigthMostIndex + leftMostIndex ) / 2 );
    // While the left pointer comes before the right pointer: left < rigth
    while(leftMostIndex <= rigthMostIndex) {
        if (arr[middleIndex] === e) {
            // e is the element in the middleIndex
            return middleIndex;
        } else if (e < arr[middleIndex]) { //IF middleIndex is 0, then rightMostIndex = 0 - 1 = -1 -> which is less than the leftMostIndex '0'; Break;
            // e is less than the middleElement
            // so move to the left part of the TREE path
            // We don't touch the leftMostIndex
            rigthMostIndex = middleIndex - 1;
            middleIndex = Math.floor( (rigthMostIndex + leftMostIndex ) / 2 ); 
        } else if (e > arr[middleIndex]) { //IF middleIndex is LAST element, then leftMostIndex = LAST + 1 = last+1 -> which is more than rigthMostIndex 'last'; Break;
            // e is greater than the middleElement
            // so move to the right part of the TREE path
            // We don't touch the rigthMostIndex
            leftMostIndex = middleIndex + 1;
            middleIndex = Math.floor( (rigthMostIndex + leftMostIndex ) / 2 ); 
        }
    }
    return -1;
}
//TIME COMPLEXITY: O(log2 n) -> n/2 -> (n/2)/2 = n/4 -> etc =RESULT -> HOW MANY STEPS (/2) we need.
//TESTS: 
console.log(binarySearch([1,2,3,4,5],2)) // 1
console.log(binarySearch([1,2,3,4,5],3)) // 2
console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],6)) // -1
console.log(binarySearch([1,2,3,4,5],0)) // -1
console.log(binarySearch([1,2,3,4,5],-5)) // -1
console.log(binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)) // 2
console.log(binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)) // 16
console.log(binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)) // -1