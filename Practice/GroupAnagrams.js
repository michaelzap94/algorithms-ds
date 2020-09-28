//49. Group Anagrams - https://leetcode.com/problems/group-anagrams/
// Write a function that takes in an array of strings and groups anagrams together.

// Anagrams are strings made up of exactly the same letters, where order doesn't
// matter. For example, <span>"cinema"</span> and <span>"iceman"</span> are
// anagrams; similarly, <span>"foo"</span> and <span>"ofo"</span> are anagrams.

// Your function should return a list of anagram groups in no particular order.

// Sample Input words= ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
// Sample Output [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]

//loop through the array and as a loop, sort each word.
//put this sorted word, and the original value in a hashmap
// whre dict -> containing: key(sorted word) -> [array of original values]
// at the end just return array of values


function groupAnagrams(words) {
	
	//crate a dict -> containing: key(sorted word) -> [array of original values]
	const dict = {};
  
	for(const word of words) {
		//sort every word
		const sortedWord = word.split("").sort((a, b) => a.localeCompare(b)).join("");
		//if sorted word in dict, just push this new word
		if(sortedWord in dict){
			dict[sortedWord].push(word);
		} else {
			//if not in dict, create empty list and add the word
			dict[sortedWord] = [word];
		}		
	}
	
	return Object.values(dict);
	
}