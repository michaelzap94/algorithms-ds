// Toeplitz Matrix
// A Toeplitz matrix is a matrix where every left-to-right-descending diagonal has the same element. 
// Given a non-empty matrix arr, write a function that returns true if and only if it is a Toeplitz matrix. 
// The matrix can be any dimensions, not necessarily square.
// For example,
// [[1,2,3,4],
//  [5,1,2,3],
//  [6,5,1,2]]
// is a Toeplitz matrix, so we should return true, while
// [[1,2,3,4],
//  [5,1,9,3],
//  [6,5,1,2]]
// isn’t a Toeplitz matrix, so we should return false.
/**
@param arr: integer[][]
@return: boolean
*/
function isToeplitz(matrix) {
    //matrix.length-1 as we do not want to process the last element of the array, since we'll look ahead matrix[i+1][j+1]
	for(let i = 0; i < matrix.length - 1 ;i++){
        //matrix[i].length-1 as we do not want to process the last element of the array
        for(let j = 0; j < matrix[i].length - 1; j++){
            //compare the current element, in current row, to the next row's element and next column's element
            if(matrix[i][j] !== matrix[i+1][j+1]) {
                return false
            }
        }
    }
    return true
}

console.log(isToeplitz([[1,2,3,4], [5,1,2,3], [6,5,1,2]]));