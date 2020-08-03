//PROBLEM: Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

//INPUTS: 2 strings
//Outputs: boolean, if Anagram true, else false

//Assumptions -> no spaces,no punctations, no numbers, Everything is Lowercase

function isAnagram(string1, string2){
    //if both strings are not the same length ---> false
    if(string1.length !== string2.length)
        return false;

    //Need 1 frecuencyCounter object for each String
    const FC1 = {};
    const FC2 = {};

    //Need to add the frecuency of each string to the corresponding object
    for (let letter of string1) {
        FC1[letter] = (letter in FC1) ? ++FC1[letter] : 1;        
    }
    for (let letter of string2) {
        FC2[letter] = (letter in FC2) ? ++FC2[letter] : 1;        
    }

    //Need to check if the length of both frecuencyCounter objects' keys match: if not ---> false
    if(Object.keys(FC1).length !== Object.keys(FC2).length)
        return false;

    //Need to loop through one of the frecuencyCounter object and CHECK that both FC objects have the same keys and frecuency
    for (const keyFC1 in FC1) {
        const frecuencyFC1 = FC1[keyFC1];
        //if one Key is not in FC2 or the frecuency is not the same ---> false
        if(!FC2.hasOwnProperty(keyFC1) || frecuencyFC1 !== FC2[keyFC1])
            return false;                    
    }

    return true;    
}

//This solution is O(n)

console.log(isAnagram('', '')); // true
console.log(isAnagram('aaz', 'zza')); // false
console.log(isAnagram('anagram', 'nagaram') ); // true
console.log(isAnagram("rat","car")); // false
console.log(isAnagram('awesome', 'awesom')); // false
console.log(isAnagram('qwerty', 'qeywrt')); // true
console.log(isAnagram('texttwisttime', 'timetwisttext')); // true

//COLT's solution

function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
    const lookup = {};
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter OR letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
          //Reduce the Frecuency in lookup.
        lookup[letter] -= 1;
      }
    }
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram('anagrams', 'nagaramm')
console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram') ); // true
console.log(validAnagram("rat","car")); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true