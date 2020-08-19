// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//easy just reverse the string
function palindrome_reverse(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

//recursion:
function palindrome_recursion(str){
    //base case
    if(str.length <= 1){return true;}
    //execution
    const first = str[0];
    const last = str[str.length - 1];

    if(first ===  last){
        const new_str = str.slice(1, -1)
        palindrome_recursion(new_str);
    } 
    return false;
}

//pointers:
function palindrome(str){
    //have 2 pointers that move towards the center
    let tail = str.length - 1;

    for (let head = 0; head < str.length; head++) {
        if(str[head] === str[tail]){
            if(head >= tail){
                return true;
            }
            tail--;
        } else {
            return false;
        }
    }
}



module.exports = palindrome;
