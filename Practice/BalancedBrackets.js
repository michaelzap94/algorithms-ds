//https://www.algoexpert.io/questions/Balanced%20Brackets
function balancedBrackets(string) {
    //expect parens to only contain valid characters
   const oppening = '([{';
   const clossing = ')]}';
   const matchingMap = {')':'(', ']': '[', '}': '{'};
   const stack = [];
   for(let currChar of string) {
     if(oppening.includes(currChar)) {
       stack.push(currChar);
     } else if(clossing.includes(currChar)) {
       if(stack.length === 0) {
         return false;
       } else {
         //character in the matchingMap === last element in the stack
         if(matchingMap[currChar] === stack[stack.length - 1]) { // (===(
           stack.pop();
         } else {
           return false;
         }
       }
     }
   }
   return stack.length === 0;
 }
 
 // Do not edit the line below.
 exports.balancedBrackets = balancedBrackets;
 