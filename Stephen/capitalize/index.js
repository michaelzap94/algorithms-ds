// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

String.prototype.capitalize = function() {
    //this will refere to the original string
    return this.substring(0, 1).toUpperCase() + this.substring(1);
};

function capitalize_first(str) {
    const newArr = [];
    for (const word of str.split(" ")) {
        newArr.push(word.capitalize());
    }
    return newArr.join(" ");
}

module.exports = capitalize_first;
