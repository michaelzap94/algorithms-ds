
// Write a function that takes in a string and returns its longest substring without duplicate characters.
// You can assume that there will only be one longest substring without duplication.
// e.g "clementisacap" -> "mentisac"

function longestSubstringUniqueChar(str){
    //we start from the beginning
    let startIndex = 0;
    //there has to be at least 1 character
    let longest = [startIndex, 1];

    let dict = {}//can contain at most 26 keys, update the index of each letter as you find it in the loop
    //loop through all letters
    for(let i = 0; i < str.length; i++) {

        //if this 'letter' is in the dict, we have already seen it
        if(str[i] in dict) {
            //get the index of this letter, and compare it to the current startIndex
            const latestRepeated = dict[str[i]];
            //update the startIndex using the latestRepeated index OR the current startIndex
            //as sometimes, you may see characters that repeat at the beginning
            //e.g: abba -> when we get to the last a -> latestRepeated + 1 = 0 + 1 = 1, 
            //but the startIndex would be updated to b(2), and we need to use the bigger startIndex since moving to the right.
            startIndex = Math.max(startIndex, latestRepeated + 1);
        }
        //if at any point the [start,end] indeces of the current operation is bigger or equal, than previous, we update them
        // latest substring in longest -> (end)longest[1] - (start)longest[0]
        // new substring (end)i - (start)startIndex
        if (longest[1] - longest[0] <= i - startIndex) {
            longest = [startIndex, i + 1];//i + 1 because str.slice(longest[0], longest[1]) will not include the last element
        }
        //update the latest index of each letter on the dict all the time for all cases
        dict[str[i]] = i;
    }

    return str.slice(longest[0], longest[1]);
}

console.log(longestSubstringUniqueChar("clementisacap"));