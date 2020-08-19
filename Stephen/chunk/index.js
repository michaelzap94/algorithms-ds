// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//RECURSION works but in different order
// function chunk(array, size) {
//     if(array.length <=0) return [];
//     let removedElements = array.splice(0, size);
//     let newArr = chunk(array, size);
//     newArr.push(removedElements);
//     return newArr;
// }

function chunk_concat_recursion(array, size) {
    if(array.length <=0) return [];
    return [array.splice(0, size)].concat(chunk(array, size));
}

function chunk_helper(array, size){
    let newArr = [];
    function helper(arr, size){
        if(arr.length <=0) return;
        newArr.push(arr.splice(0, size));
        helper(arr, size);
    }
    helper(array, size);
    return newArr;
}

function chunk_long(array, size){
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        //first get the last Array(bucket) inside the main array
        let lastBucket = newArr[newArr.length - 1];//initially it will be undefined
        //if undefined or if full, create a new bucket and add the current element
        if(typeof lastBucket === 'undefined' || lastBucket.length >= size) {
            newArr.push([element]);
        } else {//if not full, keep adding elements to it
            lastBucket.push(element);
        }
    }
    return newArr;
}

function chunk_slice(array, size) {
    let newArr = [];
    let index = 0;
    while(index < array.length ) {
        newArr.push(array.slice(index, index+size));
        index += size;
    }
    return newArr;
}

function chunk(array, size){
    let newArr = [];
    while(array.length > 0 ) {
        newArr.push(array.splice(0, size));
    }
    return newArr;
}

module.exports = chunk;
