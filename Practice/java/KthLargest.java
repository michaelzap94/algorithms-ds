class KthLargest {
    //run time of building heap is O(n)
    public int findKthLargest(int[] nums, int k) {
        //crate the min heap -> smallest item at the top
        PriorityQueue<Integer> minHeap = new PriorityQueue<Integer>();
        //iterate through the array O(n)
        for(int i: nums) {
            //add all of the elements to the heap
            minHeap.add(i);
            //if we have exceeded k capacity, drop the root(smallest element)
            //k capacity limit would make the kth largest position persistant at the root
            if(minHeap.size() > k) {
                minHeap.remove();
            }
        }
        //because we want the kth largest -> the kth largest will be the root.
        return minHeap.remove();
    }
}

//[3,2,1,5,6,4] and k = 2
//heap: [3]
//heap: [3,2] -> [2,3]
//heap: [3,2,1] -> [1,2,3] -> [2,3]
//heap: [2,3,5] -> [3,5]
//heap: [2,3,5] -> [3,5]