//https://www.algoexpert.io/questions/Search%20In%20Sorted%20Matrix
import java.util.*;

class SearchInSortedMatrix {
  public static int[] searchInSortedMatrix(int[][] matrix, int target) {
    int row = 0;//first row
		int col = matrix[row].length - 1;//last element in first row
		//if we are about to move out of bounds stop, while we are iterating on valid indeces
		//row will increase
		//column will decrease
		while(row < matrix.length && col >= 0){
			int currValue = matrix[row][col];
			//if currValue is greater than target
			//ignore all elements to the right and underneath BY moving 1 col to left
			if(currValue > target) {
				col--;
			} else if (currValue < target){
				//else if currValue is less than target
				//ignore all elements to the left and above BY moving 1 row down
				row++;
			} else {
				//we found the target
				return new int[] {row, col};
			}
		}
		
    return new int[] {-1, -1};
  }
}