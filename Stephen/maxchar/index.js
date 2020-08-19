// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const dict = {};
    const max = {letter:null,value:0};
    for (let e of str) {
        dict[e] = dict[e] ? dict[e] + 1 : 1;
        if(dict[e] > max.value) {
            max.letter = e;
            max.value = dict[e];
        }
    }
    return max.letter;
}

module.exports = maxChar;
