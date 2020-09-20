// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution.

// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].

// To get two values which the sum of them equals to the target, the brute force one is to have 2 for loop to go over the array twice. This could take O(n^2).
// So consider how to get an value very quick, we can have hashtable, which can quickly get the value in nearly O(1).
// So basically, what we can do it to put all values in a hash table. Then go over it again to find another value.

//O(n) TS
function twoSumSimple(array, target) {
    if(array === null || array.length === 0 || target === null) return null;
    const dict = {};
    //put all values in a hash table
    for (let i = 0; i < array.length; i++) {
        if(!(array[i] in dict)) {
            dict[array[i]] = i;
        }        
    }
    //Then go over it again to find another value, that meets the condition numberWeLookFor = target - currentNumber, if so return indeces
    for (let i = 0; i < array.length; i++) {
        const numberWeLookFor = target - array[i]; 
        if(numberWeLookFor in dict) {
            return [i, dict[numberWeLookFor]];
        }        
    }
    return null;
}
//O(n) TS
function twoSumBetter(array, target) {
    if(array === null || array.length === 0 || target === null) return null;
    const dict = {};
    for (let i = 0; i < array.length; i++) {
        // 1st) calculate the number we would need to have seen in the dict
        const numberWeLookFor = target - array[i]; 
        // 2nd) if it is in the dict, it means that we have reached the target sum
        if(numberWeLookFor in dict) {
            return [i, dict[numberWeLookFor]];
        } else {
            //3th) else, add it to the dict, and the index, as another number may use it later.
            dict[array[i]] = i;
        }
    }
    //Then go over it again to find another value, that meets the condition numberWeLookFor = target - currentNumber, if so return indeces
    return null;
}

//if array is sorted: binary search [1,2,3,4,5], 4
function twoSumIfSorted(array, target) {
    if(array === null || array.length === 0 || target === null) return null;
    let high = array.length - 1;
    let low = 0;
    let currentSum;
    //put all values in a hash table
    while(low < high){
        currentSum = array[high] + array[low];
        if(currentSum < target) {
            low++;
        } else if (currentSum > target){
            high--;
        } else {
            return [low, high];//currentSum === target
        }
    }
    return null;
}

// Design and implement a TwoSum class. It should support the following operations: add and find.

// add – Add the number to an internal data structure.
// find – Find if there exists any pair of numbers which sum is equal to the value.

// For example,
// add(1); add(3); add(5);
// find(4) -> true
// find(7) -> false

console.log(twoSumSimple([2, 7, 11, 15], 9));
console.log(twoSumBetter([2, 7, 11, 15], 9));
console.log(twoSumIfSorted([2, 7, 11, 15], 9))

//two sum design O(n) TS
class TwoSum {

    map = {}

    // Add the number and frecuency.
	add(number) {
	    this.map[number] = (number in this.map) ? this.map[number] + 1: 1;
	}

    // Find if there exists any pair of numbers which sum is equal to the value.
    find(target) {
        for (const key in this.map) {
            let frecuency = this.map[key];   
            let numberWeLookFor = target - key; 
            //normal case     
            if(numberWeLookFor !== key && numberWeLookFor in this.map) {
                return true;
            }
            // special case when numberWeLookFor == key -> 2 = 4 - 2 -> 2 === 2, we just need to check if it repeats
            if(numberWeLookFor === key && frecuency > 1) {
                return true;
            }
        }
        return false;
    }
	
}

const twoSum = new TwoSum();
twoSum.add(1);
twoSum.add(3);
twoSum.add(5);
console.log(twoSum.find(4));
console.log(twoSum.find(7));

