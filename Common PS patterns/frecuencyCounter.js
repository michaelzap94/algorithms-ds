//E.G: Write a function called same, which accepts 2 arrays.
// The function should return true -> if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same. (frequency matters) eg: [1,2,1] [4,4,1] false, but [1,2,2] [4,4,1] true
// (the order doesn't matter) ( arrays can be UNordered)

//THIS FUNCTION IS O(n^2) quadratic
function same(arr1, arr2){
    if(arr1.length !== arr2.length)
        return false
    let value = true;
    for (let i = 0; i < arr1.length; i++) {
        let myIndex = arr2.indexOf(Math.pow(arr1[i],2));
        if(myIndex === -1)
            return false;
        //get rid of the element we have read from arr2. so next time, we don't  consider it
        arr2.splice(myIndex,1)
    }
    return value;
}
console.log(same([1,2,1],[4,4,1]))// false
console.log(same([1,2,2], [4,4,1]))//true

//THIS FUNCTION is linear O(n)
//REMEMBER 2 SEPARATE LOOPS IS BETTER THAN NESTED LOOPS.
function sameButBetter(arr1,arr2) {
    if (arr1.length !== arr2.length)
        return false;

    //FIRST generate the Frecuency Objects ---> key(elements in array)\value(frequency of each element)
    let frecuencyObj1 = {};
    let frecuencyObj2 = {};

    for(let e1 of arr1) {
        frecuencyObj1[e1] = (e1 in frecuencyObj1) ? frecuencyObj1[e1] + 1 : 1;
    }
    for(let e2 of arr2) {
        frecuencyObj2[e2] =  (e2 in frecuencyObj2) ? frecuencyObj2[e2] + 1 : 1;
    }

    //if the length of the generated objects do not match, then return false.
    if(Object.keys(frecuencyObj1).length !== Object.keys(frecuencyObj2).length)
        return false;

    //check if they meet the criteria
    for(let key1 in frecuencyObj1){
        if(!(key1 ** 2 in frecuencyObj2) || frecuencyObj1[key1] !== frecuencyObj2[key1**2])
            return false;
    }

    return true;
}

console.log(sameButBetter([1,2,1],[4,4,1]))// false
console.log(sameButBetter([1,2,2], [4,4,1]))//true