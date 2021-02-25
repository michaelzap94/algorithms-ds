//https://www.algoexpert.io/questions/Monotonic%20Array
import java.util.*;
class Program {
    //both solutions are O(n) time and O(1) space

  public static boolean isMonotonic(int[] array) {
		//we'll use this to identify the trend:
		//0-no trend identified yet
		//1-upwards
		//2-downwards
    int trend = 0;
		//start at 1 to not go out of bounds as I'll compare current and previous
		for(int i = 1; i < array.length; i++) {
			//compare 2 elements and identify the trend
			if(array[i] == array[i-1]) {
				//if they are equals, it means no trend has been identified OR that this is still valid
				continue;
			}
			//if current is bigger than prev -> upwards
			if(array[i] > array[i-1]) {
				//update trend if null
				if(trend == 0) {
					trend = 1;
				} else if(trend == 2) {
					//trend is alreaday downwards, and we identified an upwards trend, so no monolitic
					return false;
				}
			} else {
				//update trend if null
				if(trend == 0) {
					trend = 2;
				} else if(trend == 1) {
					//trend is alreaday upwards, and we identified a downwards trend, so no monolitic
					return false;
				}
			}
		}
    return true;
  }

  public static boolean isMonotonicShorter(int[] array) {
    // Alternatively, you can start by assuming that the array is both entirely non-decreasing and entirely non-increasing. 
    // As you iterate through each element, perform a check to see if you can invalidate one or both of your assumptions.
    // if you invalidate both, then it is neither entirely NonDecreasing or entirely NonIncreasing. 

    //treat both as positive initially.
    boolean isNonDecreasing = true;
    boolean isNonIncreasing = true;
    //start at 1 to not go out of bounds as I'll compare current and previous
    for(int i = 1; i < array.length; i++) {
        //then determine if it keeps the property throughout the loop
        if(array[i] > array[i-1]) {
            isNonDecreasing = false;
        } 
        if(array[i] < array[i-1]) {
            isNonIncreasing = false;
        }
    }
    return isNonDecreasing || isNonIncreasing;
    }
}