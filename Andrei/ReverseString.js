// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse1(str) {
    if(!str || str.length < 2 || typeof str !== 'string') {
        return "Not valid";
    }
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        newStr =  str[i] + newStr;
    }
    return newStr;
}

function reverse(str) {
    
}

reverse_long("something");

module.exports = reverse;
