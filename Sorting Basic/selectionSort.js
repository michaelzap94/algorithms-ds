// 1) Store the first element as the smallest value you've seen so far.
// 2) Compare this item to the next item in the array until you find a smaller number.
// 3) If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// 4) If the "minimum" is not the value (index) you initially began with, swap the two values.
// 5) Repeat this with the next element until the array is sorted.

function selectionSort(array){
    // array.length-1 as we don't want the last item to be compared to j+1(undefined)
    for (let j = 0; j < array.length-1; j++) {
        let indexOfSmallest = j;
        for (let i = j+1; i < array.length; i++) {
            if(array[i]<array[indexOfSmallest]) indexOfSmallest = i;            
        }
        if(j !== indexOfSmallest) swapValues(array, j, indexOfSmallest);
    }
    return array;
}
function swapValues(arr, a,b){
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    //return arr;//NOT NEEDED AS WE'LL MODIFY THE ORIGINAL ARRAY.
}
//Time complexity: O(n^2);
//TESTS:
console.log(selectionSort([8,1,2,7,4,5,6,3])); //[ 1, 2, 3, 4, 5, 6, 7, 8 ]