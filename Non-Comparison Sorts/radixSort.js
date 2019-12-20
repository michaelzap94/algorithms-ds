//Implementation for Radix Sort - Base 10 ONLY: //We need 3 Helper functions

//Returns the digit in 'num' at the given position 'i'
function getDigit(num,i){
    const positiveNumber = Math.abs(num); // -34671 -> 34671
    const decimalPlace = Math.pow(10,i); // i:3 -> 10^3 = 1000
    const dividedNumberAndDecimalPLace = positiveNumber/decimalPlace;
    // 34671/1000 = 34.671
    const keepWholePart = Math.floor(dividedNumberAndDecimalPLace); // 34
    const remainder = keepWholePart % 10; // 3R4 -> 4
    return remainder;
}//Number:  3 4 6 7 1
//  Index:  4 3 2 1 0

//Returns the number of digits in 'num'
function digitCount(num){
    if(num===0) return 1;
    //The length of a number n in base b is the number of digits in the base-b numeral for n
    //log10(n) = e =========== 10^e = n
    const tenToWhatPowergGivesNum = Math.log10(Math.abs(num)); //num: 345 -> log10(345) =~ 2.NNN
    const floorNum = Math.floor(tenToWhatPowergGivesNum);
    return floorNum + 1;
}

//Returns The max number of digits of the number that has the most digits in list
function mostDigits(nums){
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        //if(maxDigits < digitCount(nums[i])) maxDigits = nums[i];
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}

//Radix algorithm implementation
// Define a function that accepts list of numbers
// 1) Figure out how many digits the largest number has
// 2) Loop from k = 0 up to this largest number of digits
//      For each iteration of the loop:
//          Create buckets (empty array) for each digit (0 to 9)
//          place each number in the corresponding bucket based on its kth digit(depending on the index where you are)
// 3) Replace our existing array with values in our buckets, starting with 0 and going up to 9
// 4) return list at the end!
function radixSort(numsList){
    const digits = mostDigits(numsList);//1)
    for (let i = 0; i < digits; i++) { //2)
        const arrOfBuckets = Array.from({length:10}, ()=> []);//[[],[],[],[],[],[],[],[],[],[]];
        for (let j = 0; j < numsList.length; j++) {
            const currentNumber = numsList[j];
            const currentDigit = getDigit(currentNumber,i);//numsList[i]: 3556, i: 0 ---> 6
            arrOfBuckets[currentDigit].push(currentNumber);
        }
        //concat using the spread '...' operator, instead of looping and pushing.
        numsList = [].concat(...arrOfBuckets);// [].concat([05,06],[12,15]) ---> [05,06,12,15]
        // for (let j = 0; j < arrOfBuckets.length; j++) {
        //     if(j === 0 ) numsList = []
        //     //numsList.concat(arrOfBuckets[j]); // [].concat([03,05]) -> [03,05]
        //     numsList.push(...arrOfBuckets[j]); //[].push(03,05)  -> [03,05]
        // }
    }
    return numsList;
}
console.log(radixSort([1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29]))
//[ 4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637 ]