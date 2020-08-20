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
function steps_iterative(n){
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

//n by n matrix -> 2 loops, print # if column in less or equal to row
function steps(n, row = 0, stair = '') {
    if(n === row) {
        return;
    }
    //when the string 'stair' is full, equals to n, move to next string, increasing row
    if(n === stair.length) {
        console.log(stair);
        steps(n, row + 1);
        return;
    }
    //loop adding chars in the same row, same string
    //stair.length is kind of like the column
    if(stair.length <= row){
        stair += '#';
    } else {
        stair += ' ';
    }
    steps(n, row, stair);
}

module.exports = steps;
