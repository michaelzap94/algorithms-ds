//MERGING SORTED ARRAYS: This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.
// Create an empty array, take a look at the smallest values in each input array
// While there are still values we haven't looked at...
// If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
// If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
// Once we exhaust one array, push in all remaining values from the other array

function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(j < arr2.length && i < arr1.length){
        if(arr1[i]<arr2[j]){
            results.push(arr1[i]);
            i++;
        } else {
            //This case will catch bigger than and Equal to (of course)
            results.push(arr2[j]);
            j++;
        }
    }
    //Now, since we don't know which arr will be larger,
    // And since after the first loop, One array should be sorted.
    // We need to append the rest of the elements from the other sorted array.
    while(i < arr1.length){
        //There are some elements left in this array, so push the remaining.
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        //There are some elements left in this array, so push the remaining.
        results.push(arr2[j]);
        j++;
    }
    return results;
}

//console.log(merge([1,10,50],[2,14,99,100])); //[ 1, 2, 10, 14, 50, 99, 100 ]

//Algorithm:
// Break up the array into halves until you have arrays that are empty or have one element (RECURSION) .slice();
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// Once the array has been merged back together, return the merged (and sorted!) array
function mergeSort(arr){
    if(arr.length <= 1) return arr;

    let middle = Math.ceil(arr.length / 2);
    let slicedArr1 = mergeSort(arr.slice(0, middle));
    let slicedArr2 = mergeSort(arr.slice(middle, arr.length));
    return merge(slicedArr1, slicedArr2);
}

console.log(mergeSort([8,1,2,7,4,5,6,3]));

