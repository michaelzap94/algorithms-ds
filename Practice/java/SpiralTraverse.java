//https://www.algoexpert.io/questions/Spiral%20Traverse
import java.util.*;

class spiralTraverse {
	//O(n) TS
  public static List<Integer> spiralTraverse(int[][] array) {
    ArrayList<Integer> result = new ArrayList<Integer>();
    //define bounds
    //you can get them from the dimenssions(lengths) of the arrays
    int startRow = 0;
    int startCol = 0;
    int endRow = array.length - 1;
    int endCol = array[startRow].length - 1;

    //
    while(startRow <= endRow && startCol <= endCol) {

        //this first loop will traverse the first border. UPPER perimeter
        for(int col = startCol; col <= endCol; col++) {
            result.add(array[startRow][col]);
        }

        //this second loop will traverse the right border. RIGHT perimeter
        //startRow + 1 since we don't want to include this element again
        for(int row = startRow + 1; row <= endRow; row++) {
            result.add(array[row][endCol]);
        }

        //this third loop will traverse the lower border. LOWER perimeter
        //endCol - 1 since we don't want to include this element again
        for(int col = endCol - 1; col >= startCol; col--) {
					//EDGE CASE--------------------------------------------------------------
					 // [[ 1,  2,  3, 4], //startRow will be 1, so we need to look at 11 and 12
					 // [ 10, 11, 12, 5], //we got 11 and 12 in the first loop, 2nd loop will not iterate
					 // [  9,  8,  7, 6]] //since we got 11 and 12 in the first loop, we dont' want to count this elements again, break;
					if(startRow == endRow) break;
					//--------------------------------------------------------------
					
          result.add(array[endRow][col]);
        }

        //this fourth loop will traverse the left border. LEFT perimeter
        //endRow - 1 since we don't want to include this element again
        //startRow + 1 since we don't want to include this element again, we visited in the first loop
        for(int row = endRow - 1; row >= startRow + 1; row--) {
					//EDGE CASE--------------------------------------------------------------
					/**
					[[1,  2, 3], 
					[12, 13, 4], first loop will get 13
					[11, 14, 5], second loop will get 14 and 15
					[10, 15, 6], third loop will not iterate
					[ 9,  8, 7]] AND we dont' want to count this elements again in this loop, break;
					*/
					if(startCol == endCol) break;
					//--------------------------------------------------------------
          result.add(array[row][startCol]);
        }

        startCol++;
        startRow++;
        endRow--;
        endCol--;

    }

    return result;
  }
}
