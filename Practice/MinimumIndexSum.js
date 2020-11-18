//599. Minimum Index Sum of Two Lists - https://leetcode.com/problems/minimum-index-sum-of-two-lists/
// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.
// You need to help them find out their common interest with the least list index sum.
//input: 2 arrays
//output: number, sum of indeces
// If there is a choice tie between answers, output all of them with no order requirement. 
// You could assume there always exists an answer. AND No duplicates in both lists.

function minIndexSum(list1, list2){

    const dict = {};
    let result = [];
    let minSum = 2000;//IT CAN only be 2000 max since The length of both lists will be in the range of [1, 1000].

    //for list1 -> store String as key and index as value
    for (let i = 0; i < list1.length; i++) {
        dict[list1[i]] = i;
    }
    
    //now loop through the second array
    for (let i = 0; i < list2.length; i++) {
        //if this element is in the dict
        //they have this is common, so add this index to the other person's index
        if(list2[i] in dict) {
            //dict[list2[i]] common element's index of the other person + this index
            const sum = dict[list2[i]] + i;
            //now update index
            dict[list2[i]] = sum;
            //if the sum is less than minSum,
            if(sum < minSum) {
                // clear the whole array
                result.splice(0, result.length);
                //push this new item
                result.push(list2[i])
                // update minSum to be this new sum
                minSum = sum;
            } else if(sum === minSum) {
                //if minSum is the same as minSum, just push this item to the results
                result.push(list2[i])
            }
        }
    }

    return result;
}