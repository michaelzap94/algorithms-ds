//https://www.codewars.com/kata/529bf0e9bdf7657179000008
public class SudokuValidator {
    public static boolean check(int[][] sudoku) {
//       The rules of the game are simple: each of the nine blocks has to contain all the numbers 1-9 within its squares. 
//       Each number can only appear once in a row, column or box.
        boolean[][] isUsedInRow = new boolean[10][10];
        boolean[][] isUsedInColumn = new boolean[10][10];
        boolean[][] isUsedInSubBox = new boolean[10][10];
        for(int row =0; row < sudoku.length; row++) {
          for(int column =0; column < sudoku[row].length; column++) {
            int value = sudoku[row][column];
            if(value == 0) return false;
            //(Math.floor(column/3) * 3)); -> is the key here: 
            //Math.floor(0/3) -> 0 * 3 = 0 | Math.floor(1/3) -> 0 * 3 = 0  | Math.floor(2/3) -> 0 * 3 = 0 
            //Math.floor(3/3) -> 1 * 3 = 2 | Math.floor(4/3) -> 1 * 3 = 3  | Math.floor(5/3) -> 1 * 3 = 3 
            //Math.floor(6/3) -> 2 * 3 = 6 | Math.floor(7/3) -> 2 * 3 = 6  | Math.floor(8/3) -> 2 * 3 = 6 
            int boxIndex = (int) (Math.floor(row/3) + (Math.floor(column/3) * 3));
            //System.out.println(boxIndex);
            if(isUsedInRow[row][value] || isUsedInColumn[column][value] || isUsedInSubBox[boxIndex][value]) {
              return false;
            }
            
            //for each variable value in a row that we have seen mark it as true
            isUsedInRow[row][value] = true;
            //for each variable value in a column that we have seen mark it as true
            isUsedInColumn[column][value] = true;
            //for each variable value in a box inside a squeare that we have seen mark it as true
            isUsedInSubBox[boxIndex][value] = true;
            
          }
        }
      return true;
    }
}