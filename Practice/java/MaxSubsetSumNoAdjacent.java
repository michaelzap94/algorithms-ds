MaxSubsetSumNoAdjacent
import java.util.*;

class Program {
    //O(n) | O(n)
    public static int maxSubsetSumNoAdjacent(int[] array) {
        //edge cases
        if(array.length == 0) return 0;
        else if(array.length == 1) return array[0];
        //use Array to store the max stored so far till the current index
        int[] maxSums = new int[array.length];
        //base cases
        maxSums[0] = array[0];
        maxSums[1] = Math.max(array[0], array[1]);
        //loop;
        for(int i = 2; i < array.length; i++) {
            //formula maxSums[current]-> maximo entre: ultimo, or penultimo + current
            maxSums[i] = Math.max(maxSums[i-1], maxSums[i-2] + array[i]);
        }
        //last element will have the maximum sum of no adjacent subset
        return maxSums[maxSums.length - 1];
    }

    //O(n) | O(1)
    public static int maxSubsetSumNoAdjacent(int[] array) {
        //edge cases
        if(array.length == 0) return 0;
        else if(array.length == 1) return array[0];
        //formula maxSums[current]-> maximo entre: ultimo, or penultimo + current
        //as you can see we only look at the 2 last values of the maxSums array, so maybe we can store these in variables
        //rather than creating an array for them
        int penultimo = array[0];
        int ultimo = Math.max(array[0], array[1]);
        //loop;
        for(int i = 2; i < array.length; i++) {
            //formula currentMax -> maximo entre: ultimo, or penultimo + current
            int currentMax = Math.max(ultimo, penultimo + array[i]);
            penultimo = ultimo;//penultimo will point to ultimo now
            ultimo = currentMax;//ultimo will point to the currentMax
        }
        //last element will have the maximum sum of no adjacent subset
        return ultimo;
    }
}
  
