import kthMostFrecuent.*;
import kthlargest.*;

public class Run{
    public static void main(String []args) {
        SolutionKthLargest l = new SolutionKthLargest();
        SolutionKthMostFrecuent mf = new SolutionKthMostFrecuent();
        l.findKthLargest(new int[]{3,2,1,5,6,4},2);
     }
}