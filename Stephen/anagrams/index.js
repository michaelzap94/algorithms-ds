// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. 
// 1) Only consider characters
// 2) not spaces or punctuation.  
// 3) Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams_frec_counter(stringA, stringB) {
    if(stringA === "" || stringB === "") {
        return true;
    }
    //meet the standards
    let first = stringA.replace('/[^\w]/g', "").toLowerCase();
    let second = stringB.replace('/[^\w]/g', "").toLowerCase();

    //create 2 maps:
    let firstMap = {};
    let secondMap = {};
    //populate maps
    for (let i = 0; i < first.length; i++) {
        const letter = first[i];
        firstMap[letter] = (firstMap[letter]) ? firstMap[letter] + 1 : 1;
    }
    for (let i = 0; i < second.length; i++) {
        const letter = second[i];
        secondMap[letter] = (secondMap[letter]) ? secondMap[letter] + 1 : 1;
    }

    //check they have the same keys' length
    if(Object.keys(firstMap).length !== Object.keys(secondMap).length) {
        return false;
    }

    //iterate through one and check if they both have the same keys and frecuency
    for (let key in firstMap) {
        if(!secondMap.hasOwnProperty(key) || secondMap[key] !== firstMap[key]){
            return false;
        }
    }
    //return true if nothing went wrong
    return true;

}

function anagrams(stringA, stringB) {
    if(stringA === "" || stringB === "") {
        return true;
    }
    //meet the standards
    let first = stringA.replace('/[^\w]/g', "").toLowerCase().split("").sort().join();
    let second = stringB.replace('/[^\w]/g', "").toLowerCase().split("").sort().join();

    return first === second;

}

module.exports = anagrams;
