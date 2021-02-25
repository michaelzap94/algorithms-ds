//https://www.algoexpert.io/questions/Single%20Cycle%20Check
import java.util.*;

class Program {
  public static boolean hasSingleCycle(int[] array) {
		int numberOfElementsVisited = 0;//we can only ever visit array.length
		int startingPoint = 0;
		int currIndex = startingPoint;
    while(numberOfElementsVisited < array.length){
			//if we come back to the starting point, before visiting all of the n elements, and this is not the first iteration -> cycle
			if(currIndex == startingPoint && numberOfElementsVisited > 0) return false;
			numberOfElementsVisited++;
			currIndex = moveIndex(array, currIndex);
		}
		//if we have visited all n elements and we are not back to the starting point -> false -> cycle;
    return currIndex == startingPoint;
  }
	
	//you need to move the index by the number of positions at the curren position
	//you need to handle the edge cases when we move out of bounds
	public static int moveIndex(int[] array, int currIndex) {
		int jumps = array[currIndex];//use it to make jumps
		//(0 + 3) % 4 -> 3
		//MODULUS % will make use have a value of max: array.length - 1
		//0 % 4 -> 0 | -0 % 4 -> -0
		//1 % 4 -> 1 | -1 % 4 -> -1
		//2 % 4 -> 2 | -2 % 4 -> -2
		//3 % 4 -> 3 | -3 % 4 -> -3
		//4 % 4 -> 0 | -4 % 4 -> -0
		//5 % 4 -> 1 | -5 % 4 -> -1
		//6 % 4 -> 2 | -6 % 4 -> -2
		int nextIndex = (currIndex + jumps) % array.length;
		//since we can have negatives, if going over the bounds in reverse order like in: -5 % 4 -> -1
		//we need to convert the -1 to be the last index of the array-> -1 + 4 = 3
		return (nextIndex >= 0) ? nextIndex : nextIndex + array.length;
  }
}

