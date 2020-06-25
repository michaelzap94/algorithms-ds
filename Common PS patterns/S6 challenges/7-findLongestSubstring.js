//Accepts a string and returns the length of the longest substring with all distinct characters.
function findLongestSubstring(str){
    //we need a frecCounter dict
    let seen = {};
    //we need a window
    let start = 0;
    //let end = 0;
    let longest = 0;

    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if(seen[element]){
            //new start point will be the next element from where we found the duplicate
            start = Math.max(start, seen[element]);
        }
        //find longest
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count(start from the next)
        seen[element] = i + 1;
    }
    return longest;

}

console.log(findLongestSubstring(''));
console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('thecatinthehat'));
console.log(findLongestSubstring('bbbbbb'));
console.log(findLongestSubstring('thisishowwedoit'));