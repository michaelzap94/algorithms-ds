// In order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
// Given an array, this helper function should designate an element as the pivot
// It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
// The order of elements on either side of the pivot doesn't matter!
// The helper should do this in place, that is, it should not create a new array
// When complete, the helper should return the index of the pivot

// The runtime of quick sort depends in part on how one selects the pivot
// Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
// For simplicity, we'll always choose the pivot to be the first element (we'll talk about consequences of this later)

// let arr = [ 5, 2, 1, 8, 4, 7, 6, 3 ]
// pivot(arr); // 4;
// any one of these is an acceptable mutation:
// [2, 1, 4, 3, 5, 8, 7, 6]
// [1, 4, 3, 2, 5, 7, 6, 8]
// [3, 2, 1, 4, 5, 7, 6, 8]
// [4, 1, 2, 3, 5, 6, 8, 7]
// there are other acceptable mutations too!
// All that matters is for 5 to be at index 4, 
// for smaller values to be to the left, and for larger values to be to the right

// Pivot function:
// It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
// Grab the pivot from the start of the array "pivot"(For simplicity)
// Store the current pivot index in a variable "swapIndex"(this will keep track of where the pivot should end up)
// Loop through the array from the start until the end
// If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// At the end of the loop: Swap the starting element (i.e. the pivot) with the pivot index "swapPivotIndex"
// Return the pivot index
function pivot(arr, start=0, end=arr.length-1){
    let pivot = arr[start];
    let swapPivotIndex = start;
    //start loop from second element, as the first one is the Pivot.
    for (let i = start + 1; i <= end; i++) {
        //if pivot is bigger than current element
        if(pivot > arr[i]){
            //increase swapPivotIndex, move pointer to right
            swapPivotIndex++;
            //Now swap current element with swapPivotIndex element:
            swapValues(arr, swapPivotIndex, i);
        }
    }
    //After the loop: Swap the starting element (i.e. the pivot index) with the swap pivot index element "swapPivotIndex"
    swapValues(arr, start, swapPivotIndex);
    return swapPivotIndex;
}
function swapValues(arr, a,b){
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    //return arr;//NOT NEEDED AS WE'LL MODIFY THE ORIGINAL ARRAY.
}
function quickSort(arr, left = 0, right = arr.length -1){//First time, we'll use the default values(whole array)
    //when the left pointer is not the same as the right pointer --> at least 2 elements to be compared
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1); //sort the left part of the pivot
        //right
        quickSort(arr,pivotIndex+1,right); //sort the right part of the pivot
    }
    //else, base case -> both left and right are pointing to the same element, hence return Array
    return arr;
} 
console.log(quickSort([100,-3,2,4,6,9,1,2,5,3,23]))//[ -3, 1, 2, 2, 3, 4, 5, 6, 9, 23, 100 ]
// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1