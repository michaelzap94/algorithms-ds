//14 Longest Common Prefix 28.1% Easy - https://leetcode.com/problems/longest-common-prefix/
//Requirements: Write a function to find the longest common prefix string amongst an array of strings.
//input: list of strings
//output: string
//assumptions: If  no common prefix, return "". | list cannot be empty | list can only have strings | list cannot be null
//constraint: none

// Input: ["flower","flow","flight"]
// Output: "fl"

// Sort the array of strings in alphabetical order.
// Compare the characters in the first and last strings in the array. 
// Since the array is sorted, common characters among the first and last element will be common among all the elements of the array.
// 2.1. If they are same, then append the character to the result.
// 2.2. Else, stop the comparison – result contains the longest common prefix among the strings in the array.

function longestCommonPrefix(list){
    if(list === null || list.length < 1) return "";
    //first sort the array, because you need to find the commond bit in all words, when you sort them, you'll just have to compare the first and the last word
    list.sort();
    //compare characters in first and last item.
    let common = "";
    //choose the first word to get the length as it'll be the maximum length
    const length = list[0].length;
    //iterate length times through first and last, and if common add to common string
    for (let i = 0; i < length; i++) {
        // If the characters of the first and last word match, append the character to the result.
        if(list[0][i] === list[list.length - 1][i]) {
            common = common + list[0][i];
        } else {
            // Else, stop the comparison.
            break;
        }
        
    }
    console.log(list);
    return common;
}

// We traverse through array and take two words and pass them to find common function to get the common part.
// then we store the return result from that function in a variable common. Then we pass the common and next word to the find common function to get the common part between them.
// ex:- ["flower","flow","flight"] firstly we'll pass flower and flow to findCommon which returns flow. then we'll take the result i.e flow and next word flight and pass to findcommon.
// end result is our answer.

var longestCommonPrefix = function(strs) {
    const len=strs.length;
    if (len==0) return "";
    let common=strs[0];
    for(let i=1;i<len;i++)
    {
     common=findCommon(common,strs[i]);
    }
    return common;
  };
  
  // this function takes two words and returns the common part between them. it traverse both words from start till their chars match. 
  // when there is a mismatch, it returns the part of string untill then.
  
  var findCommon=function(first,second)
  {
   let i=0,j=0;
   const firstLen=first.length,secondLen=second.length;
   while(i<firstLen && j<secondLen && first[i]==second[j])
   {
    i++;
    j++; 
   }
   return first.slice(0,i);
  }

longestCommonPrefix(["aaa","aa","aaa"]);

// static String getLongestCommonPrefix(String[] strings) {
//     if (strings.length == 0 || strings == null)
//         return "";
//Here we consider first string as prefix
//     String prefix = strings[0];

//     for (int i = 1; i < strings.length; i++) {
//         /*
//         Here we consider first string as prefix and keep comparing that with the next elements and whenever they aren't equal
//         we remove a character from the end of prefix. And in the end we only get the common prefix among all.
//         */
//         while (strings[i].indexOf(prefix) != 0) {
//             prefix = prefix.substring(0, prefix.length() - 1);
//         }
//     }

//     return prefix;
// }


