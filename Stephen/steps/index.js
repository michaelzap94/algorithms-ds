// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//n by n matrix -> 2 loops, print # if column in less or equal to row
function steps(n){
    for (let row = 0; row < n; row++) {
        let str = '';
        for (let column = 0; column < n; column++) {
            if(column <= row){
                str += '#';
            } else {
                str += ' ';
            }
        }
        console.log(str);
    }
}

// function steps(n) {
//     if(n === 1) {
//         return;
//     } else {
//         n--;
//         steps(n);
//         console.log(n);
//     }
// }

module.exports = steps;
