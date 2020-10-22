//5. Longest Palindromic Substring - https://leetcode.com/problems/longest-palindromic-substring/
function longestPalindromicSubstring(string) {
    //we need to store a tuple of the FIRST starting index and the ending index
    let currentLongest = [0,1]
    //start at 1 because we know the first letter is a palindrome, as a single letter is considered a palindrome
    for (let i = 1; i < string.length; i++) {
        //prev letter and next letter -> bab -> a will be i
        const odd = getLongestPalindromeFrom(string, i - 1, i + 1);//return a tuple of indeces[start,end] of the palindrome if any
        //current letter and prev letter ba -> a will be i
        const even = getLongestPalindromeFrom(string, i-1, i);//return a tuple of indeces[start,end] of the palindrome if any
        //check which one is bigger: e.g: 4 - 2 > 3 - 2
        const longest = ((odd[1] - odd[0]) > (even[1] - even[0])) ? odd: even;
        //now update the currentLongest substring indeces
        currentLongest = ((currentLongest[1] - currentLongest[0]) > (longest[1] - longest[0])) ? currentLongest : longest;
    }
    return string.slice(currentLongest[0], currentLongest[1]);
}

//keep increasing palindromic [start, end] indeces till no longer a palindrome or reached out of bounds
function getLongestPalindromeFrom(string, leftIndex, rightIndex) {
    //we keep looking up until we reach the String's upper or lower bounds
    while(leftIndex >= 0 && rightIndex < string.length) {
        if(string[leftIndex] !== string[rightIndex]) {
            break; //not longer a palindrome
        }
        //else keep increasing the palindromic indeces
        leftIndex--;
        rightIndex++;
    }
    //leftIndex+1 will be one index too far from the left as 
    //currentLongest = [0,1], we start looping from 1;
    //and leftIndex >= 0 will make it so we enter the loop even if leftIndex == 0, reducing it to -1
    //rightIndex will also be increased to +1 but in string.slice(currentLongest[0], currentLongest[1]); 
    //it is not including the end index currentLongest[1]
    return [leftIndex + 1, rightIndex];
}