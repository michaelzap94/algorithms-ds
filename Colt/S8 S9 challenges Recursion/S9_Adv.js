function reverse(str){
    //convert to Array since arrays are mutable and strings are not, improving efficiency
    const arr = str.split('');
    const newArr = [];
    function reverseHelper(arr){
        //base case
        if(arr.length === 0) return;
        //different input function calls
        newArr.push(arr.pop());
        reverseHelper(arr);
    }
    reverseHelper(arr);
    return newArr.join('');
  }

  function reverse2(str){
    //base case
    if(str.length < 1) return '';
    //different input function calls
    const firstLetter = str[0];
    const remainingLetters = str.slice(1);
    return reverse2(remainingLetters) + firstLetter;
  }


  console.log(reverse('awesome')) // 'emosewa'
  console.log(reverse2('rithmschool')); // 'loohcsmhtir'

//========================================================================================
// function isPalindrome(str){
//     function reverseHelper(str){
//         //base case
//         if(str.length < 1) return '';
//         //different input function calls
//         const firstLetter = str[0];
//         const remainingLetters = str.slice(1);
//         return reverseHelper(remainingLetters) + firstLetter;
//     }
//     const reversed = reverseHelper(str);
//     return reversed === str;
    
// }

function isPalindrome(str){
    if(str.length === 1) return true;
    //base case
    if(str.length === 2) return str[0] === str[1];
    //different input function calls
    //if first and last are the same check the letters in between
    if(str[0] === str[str.length - 1]) return isPalindrome(str.slice(1,-1));
    return false;
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false