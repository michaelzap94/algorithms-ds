//Write a function calledproductOfArraywhich takes in an array of numbers and returns the product of them all.

function productOfArray(arr){
    if(arr.length === 0) return 1;
    return arr.pop() * productOfArray(arr);
}

//Tests: 
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60