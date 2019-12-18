// 1) Start by picking the second element in the array
// 2) Now compare the second element with the one before it and swap if necessary.
// 3) Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
// 4) Repeat until the array is sorted.

function insertionSort(array){
    //new element of original array - we start with the second element.
    for (let i = 1; i < array.length; i++) {
        const newItem = array[i];
        //loop to sort the sortedArr, right to left. Starting from i -1
        //Since we are going backwards, Previous position will be j+1
        let j  = i-1;//we need j to be available, outside this loop.
        for (j; 0 <= j && newItem < array[j]; j--) {
            // if newItem is smaller
            // move item (array[j]) up to previous item (array[j+1])
            array[j+1] = array[j];
        }
        //after the loop finishes, it means we found the correct spot
        //place newItem in the previous position(j+1) if it's not smaller
        array[j+1] = newItem;
    }
    return array;
}
//Time complexity: O(n^2);
//TESTS:
console.log(insertionSort([8,1,2,7,4,5,6,3])); //[ 1, 2, 3, 4, 5, 6, 7, 8 ]
