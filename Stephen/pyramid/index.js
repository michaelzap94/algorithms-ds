// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//each level will have (n*2)-1 columns
function pyramid_iterative(n) {
    let columns = ((n*2)-1);
    let midPoint = Math.floor(columns/2);
    for (let row = 0; row < n; row++) {
        let level = '';
        for (let column = 0; column < columns; column++) {
            //for each level we want to convert the middle and the one to the left and right
            if(midPoint - row <= column && midPoint + row >= column){
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

function pyramid(n, row = 0, level = '') {
    //stop when we reach to the maximum row
    if(n === row) {
        return;
    }

    let columns = ((n*2)-1);
    if(level.length === columns) {
        console.log(level);
        pyramid(n, row + 1);
        return;
    }

    //level.length would be kind of like the columns
    let midPoint = Math.floor(columns/2);
    if(midPoint - row <= level.length && midPoint + row >= level.length){
        level += '#';
    } else {
        level += ' ';
    }

    pyramid(n, row, level);
}

module.exports = pyramid;
