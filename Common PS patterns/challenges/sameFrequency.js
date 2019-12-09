//Write a function called sameFrecuency. Given 2 positive integers, find out if the 2 numbers have the same frequency of digits.

//INPUTS: 2 positive ingers.
//Output: boolean -> have the same frequency of digits?
//Output Derived from inputs:
//Requirements: 2 positive integers
//assumptions: 2 positive integers

function sameFrequency(f, s) {
    const first = f.toString();
    const second = s.toString();
    if(first.length !== second.length)
        return false;
    
    const firstFrequencyObj = {};
    const secondFrequencyObj = {};

    for (let e of first) {
        firstFrequencyObj[e] = (e in firstFrequencyObj) ? firstFrequencyObj[e] + 1 : 1;
    }
    for (let e of second) {
        secondFrequencyObj[e] = (e in secondFrequencyObj) ? secondFrequencyObj[e] + 1 : 1;
    }

    //if the frequency objects do not have the same length: return false:
    if(Object.keys(firstFrequencyObj).length !== Object.keys(secondFrequencyObj).length){
        return false;
    }
    console.log(firstFrequencyObj, secondFrequencyObj);
    //compare the frequncies
    for (let e in firstFrequencyObj) {
        //if one Key is not in secondFrequencyObj or the frecuency is not the same ---> false
        if(!(secondFrequencyObj.hasOwnProperty(e)) || firstFrequencyObj[e] !== secondFrequencyObj[e]){
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(128, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));