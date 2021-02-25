import java.util.*;
//TARGET IS 0;
class SmallestDiff2Arrays1Target {
  public static int[] smallestDifference(int[] arrayOne, int[] arrayTwo) {
    //first sort both arrays
		Arrays.sort(arrayOne);
		Arrays.sort(arrayTwo);
		int[] result = new int[2];
		//start both pointers from 0
		int p1 = 0;
        int p2 = 0;
		int closestValue = Integer.MAX_VALUE;//for now max is the min
		//while we have not loop through all of the elements in both arrays
		while(p1 < arrayOne.length && p2 < arrayTwo.length ) {
			int currDiff = Math.abs(arrayOne[p1] - arrayTwo[p2]);
			//if the currdiff is LESS than closestValue, update closestValue to be this new currDiff
			//and also update the array we need to return, which should be a unique pair or ints
			if(currDiff < closestValue) {
				closestValue = currDiff;
				result[0] = arrayOne[p1];
				result[1] = arrayTwo[p2];
			}
			//now move the p1 OR p2 pointer
			//if (the element of the first array is smaller AND there's still elements in it), move that pointer
			if(arrayOne[p1] < arrayTwo[p2] && p1 < arrayOne.length) {
				p1++;
			} else {
				p2++;
			}
			
		}
		
    return result;
  }
}