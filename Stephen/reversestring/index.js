// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse1(str) {
    let newStr = "";
    for (let i=str.length -1; i >= 0; i--) {
        newStr = newStr + str[i];
    }
    return newStr;
}

function reverse_long(str) {
    
    let newStr = "";
    for (let i=0; i < str.length; i++) {
        newStr = str[i] + newStr;
    }
    return newStr;
}

function reverse(str) {
    return str.split('').reduce((prev,curr) => curr + prev, "");
}

reverse_long("something");

module.exports = reverse;
