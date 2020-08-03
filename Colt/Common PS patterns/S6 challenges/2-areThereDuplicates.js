//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any
//duplicates among the arguments passed in. 

//INPUTS: unknown number of arguments
//OUTPUTS: BOOLEAN: are there duplicates among the arguments
//Output derived from input: YES
//Requirements: none
//Assumptions: not null arguments

//Frequency counter Solution:
function areThereDuplicatesFC(...args){

    if(args.length <= 1){
        return false;
    }
    const fc = {};
    for (const e of args) {
        fc[e] = (e in fc) ? fc[e] + 1 : 1;
        if(fc[e]>=2){
            return true;
        }
    }

    return false;

}
//Time: O(n)
//Space: O(n) -> as n increases -> number of keys/indexes in objects and arrays increase

//One Liner Solution
function areThereDuplicatesSet() {
    //Set will remove duplicates
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicatesFC(1,2,3));
console.log(areThereDuplicatesFC(1,2,2));
console.log(areThereDuplicatesFC('a','b','c','a'));