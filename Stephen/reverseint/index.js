// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let sign = Math.sign(n);//1 or -1
    n = sign * n; //remove sign
    let str = n.toString();//convert to string
    let reversedStr = str.split('').reduce((prev,curr) => curr + prev, "");//reverse to str

    return parseInt(reversedStr) * sign;//return number with original number
}

module.exports = reverseInt;
