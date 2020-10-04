//151. Reverse Words in a String - https://leetcode.com/problems/reverse-words-in-a-string/
//using extra space:
//O(n)T - O(n)S:

// Given an input string, reverse the string word by word.

// For example,
// Given s = “the sky is blue“,
// return “blue is sky the“.

//input: array of strings -> String
//output: String
//Requirements: Given an input string, reverse the string word by word.
//Assumptions: what counts as a word? -> a populated string with non-space characters
//Constraints: 
//Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
//You need to reduce multiple spaces between two words to a single space in the reversed string.

function reverseWordsInArr(input) {
    if(input === null || input.length === 0){
        return "";//exit
    }
    //split the string on every space to have a list of words
    const wordsArray = input.split(" ");
    //use an array continer for the reversed words
    const reversedWordsArray = [];
    //loop in reverse order
    for(let i = wordsArray.length - 1; i >= 0; i--) {
        //only push if item is not empty, as if it is empty
        if(wordsArray[i] !== "") {
            //you need to trim each word, as no space is needed
            reversedWordsArray.push(wordsArray[i].trim());
        }
    }
    //join all words with space
    return reversedWordsArray.join(" ");//.trim();
}

console.log(reverseWordsInArr("the sky is blue"))
console.log(reverseWordsInArr("  hello world!  "))
console.log(reverseWordsInArr("a good   example"))
/*****************************************************************************/
/* Time is O(n), Space is O(1) */
// Use str.toCharArray() to change it to char array. Then reverse the whole array. 
// Scan the array, if find a ‘ ‘, then reverse it from beginning. Update the start.
/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify str in-place instead.
 */
function reverseWordsInPlace(input) {
    //convert string to an array of characters
    //Array is pass by reference so we could make changes to it directly
    input = input.split('');
    if(input === null || input.length === 0){
        return;//exit
    }
    //now reverse the whole array (array, startIndex, endIndex)
    helperReverse(input, 0, input.length - 1);
    //[ 't', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e' ]
    //[ 'e', 'u', 'l', 'b', ' ', 's', 'i', ' ', 'y', 'k', 's', ' ', 'e', 'h', 't' ]
    //now we need to reverse each word we find
    //i <= input.length because we'll go one element out of bounds, to check i === input.length, down there as end Index we use is i - 1 to not include the space 
    for (let i = 0, start = 0; i <= input.length; i++) {
        //input[i] === " " -> if the currenct character is a space, reverse, from start till this point, and update the start to be the next item
        //i === input.length -> we reached the last element
        if(input[i] === " " || i === input.length) {
            //i - 1 -> do not count this space or last element(undefined)
            helperReverse(input, start, i - 1);
            start = i + 1;
        }        
    }

    console.log(input);

}

//"hello" -> ol   eh 1 3 -> 2 2
function helperReverse(input, startIndex, endIndex) {
    //exchange each start with each end index, until start index is equal or bigger than end
    //-> middle character does not need reversing
    while(startIndex < endIndex) {
        const temp = input[startIndex];
        input[startIndex] = input[endIndex];
        input[endIndex] = temp;
        //we have finished this, so increase start and reduce end
        startIndex++;
        endIndex--;
    }
}

console.log(reverseWordsInPlace("the sky is blue"))
console.log(reverseWordsInPlace("  hello world!  "))
console.log(reverseWordsInPlace("a good   example"))