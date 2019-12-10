/** THEORY **/
// Iterate through ALL elements IN THE ARRAY. -> one by one till we find e-> O(n)
// e.g: indexOf(), includes(), find(), findIndex();

/** examples **/
//Write a function called linearSearch which accepts an array and a value, 
//and returns the index at which the value exists.
//If the value does not exist in the array, return -1.

function linearSearch(array, value){
    for (let i = 0; i < array.length; i++) {
        if(array[i] === value){
            return i;
        }        
    }
    return -1;
}

//O(n) so LINEAR -> GIVE IT AWAY: Linear search; Ta dah, lol.

//TESTS:
linearSearch([10, 15, 20, 25, 30], 15) // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
linearSearch([100], 100) // 0
linearSearch([1,2,3,4,5], 6) // -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
linearSearch([100], 200) // -1