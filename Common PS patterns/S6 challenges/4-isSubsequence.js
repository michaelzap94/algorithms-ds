//Write a function called isSubsequence.  which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. 
//In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

//INPUTS: 2 strings
//OUTPUTS: Boolean: if is Subsequnce -> true
//can the output be derived from the input? YES
//Requirements: no invalid input(int, arr, null, etc) only string.
//assumptions: string can be empty, 

function isSubsequenceMP(str1, str2) {
    if(str1.length === 0) return true;//if str1 is empty, then it will be a subsequence of str2, by default.
    if(str2.length === 0) return false;//if str2 is empty, there can be no subsequence of this string.

    //create 2 pointers:
    let firstPointer = 0; //will point to all characters in str1, that also that also appear in str2.
    let secondPointer = 0;//will point to all characters in str2.

    for (secondPointer; secondPointer < str2.length; secondPointer++) {
        if(str2[secondPointer] === str1[firstPointer]){
            // since this letter is in str1, now move to the second letter in str1;
            firstPointer++;//if last-> firstPointer === str1.length AND NOT firstPointer + 1 === str1.length, since we are adding 1 here already.
            //if this is the last letter in str1,then all of them appear, we stop and return true;
            if(firstPointer === str1.length) return true;
        }        
    }
    return false;
}

//Time: O(n)

console.log(isSubsequenceMP('hello', 'hello world')); // true
console.log(isSubsequenceMP('sing', 'sting')); // true
console.log(isSubsequenceMP('abc', 'abracadabra')); // true
console.log(isSubsequenceMP('abc', 'acb')); // false (order matters)// WE will have passed c in the str2, because we would be looking for b first.