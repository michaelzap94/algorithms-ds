// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels_regex(str){
    let regex = /[aeiou]/gi;
    const matches = str.match(regex);
    return (matches == null) ? 0 : matches.length;
}

function vowels(str) {
    let counter = 0;
    let vowelList = ['a','e','i','o','u'];
    for (const letter of str.toLowerCase()) {
        if(vowelList.includes(letter)) {
            counter++;
        }
    }
    return counter;
}

module.exports = vowels;
