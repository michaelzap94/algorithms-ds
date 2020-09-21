import java.util.AbstractMap;
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        //unlike the kth largest, here we need to find the most frecuent element
        //therefore, first find the frecuencies and store them in a HashMap
        
        // O(1) time -> if only k elements in array
        if (k == nums.length) {
            return nums;
        }
        
        HashMap<Integer, Integer> frecuencyMap = new HashMap<Integer, Integer>();
        
        for(int i: nums) {
            frecuencyMap.put(i, frecuencyMap.getOrDefault(i,0) + 1);
        }
        
        //once I have all frecuencies, I can construct a minHeap, where the kth most frecuent will be the root
        //now iterate through the hashmap, and use the node^frecuency to build the minHeap
        //(a, b)->a.getValue()-b.getValue() -> less to more -> minHeap
        //(a, b)->b.getValue()-a.getValue() -> more to less -> maxHeap
        // PriorityQueue<Map.Entry<Integer, Integer>> minHeap = new PriorityQueue<>((a, b)->a.getValue()-b.getValue());
        // for (Map.Entry<Integer, Integer> entry : frecuencyMap.entrySet()) {
        //     // Integer key = entry.getKey();
        //     // Integer value = entry.getValue();
        //     // minHeap.add(new AbstractMap.SimpleEntry<Integer,Integer>(key, value));
        //     minHeap.add(entry);
        //     if(minHeap.size() > k) {
        //         minHeap.remove();
        //     }
        // }
        
        PriorityQueue<Integer> minHeap = new PriorityQueue<>((a, b)->frecuencyMap.get(a)-frecuencyMap.get(b));
        //add all VALUES to the minHeap -> THE minHeap IS SET UP so that it sorts by the frecuencies in our frecuencyMap USING:
        //(a, b)->frecuencyMap.get(a)-frecuencyMap.get(b)
        for (Integer key : frecuencyMap.keySet()) {
            //add all keys to the minHeap
            minHeap.add(key);
            //LIMIT the size of the heap to k elements, to have the smallest on top, this one will be the k element
            if(minHeap.size() > k) {
                minHeap.remove();
            }
        }
        
        // 3. build an output array
        // O(k log k) time
        int[] top = new int[k];
        for(int i = 0; i < k; i++) {
            top[i] = minHeap.remove();
            //top[i] = minHeap.remove().getKey();
        }        
        return top;
    }
}

// final class MyEntry implements Map.Entry<String, Integer> {
//     private final String key;
//     private Integer value;

//     public MyEntry(String key, Integer value) {
//         this.key = key;
//         this.value = value;
//     }

//     @Override
//     public String getKey() {
//         return key;
//     }

//     @Override
//     public Integer getValue() {
//         return value;
//     }

//     @Override
//     public Integer setValue(Integer value) {
//         Integer old = this.value;
//         this.value = value;
//         return old;
//     }
// }

// minHeap.add(new MyEntry("word",5));

