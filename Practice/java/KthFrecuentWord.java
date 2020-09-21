public class KthFrecuentWord{
    public List<String> topKFrequentSort(String[] words, int k) {
        //not valid as we'll need to sort the keys if same frecuency
        // if(words.length == k) {
        //     return Arrays.asList(words);
        // }

        //first find the frecuencies, and store them in a map

        HashMap<String, Integer> map = new HashMap();
        for(String word: words) {
            map.put(word, map.getOrDefault(word, 0) + 1) ;
        }

        //return a list of all keys(set/unique as it's a hashmap)
        List<String> uniqueWords = new ArrayList(map.keySet());

        //now sort the uniqueWords, by the frecuency in the map
        //if 2 keys have the same frecuency, sort them by comparing the ASCII code .compareTo of their String value
        //w1.compareTo(w2) -> w1 comes before w2 because we want the one with upper alphabetical order first
        //else, sort it by frecuency
        Collections.sort(uniqueWords, 
            (w1, w2) -> map.get(w1).equals(map.get(w2)) ? w1.compareTo(w2) : map.get(w2) - map.get(w1));

        //As the list is sorted by frecuencty now, we can just return all elements, up to k
        return uniqueWords.subList(0, k);
    }

    public List<String> topKFrequentHeap(String[] words, int k) {
        HashMap<String, Integer> map = new HashMap();
        for(String word: words) {
            map.put(word, map.getOrDefault(word, 0) + 1) ;
        }

        //if 2 keys have the same frecuency map.get(w1).equals(map.get(w2)), sort them by comparing the ASCII code .compareTo of their String value
        //w2.compareTo(w1) -> w2 comes before w1 because we want the one with lower alphabetical order first
        //else, sort it by frecuency, in ascending order
        PriorityQueue<String> minHeap = new PriorityQueue<String>(
                (w1, w2) -> map.get(w1).equals(map.get(w2)) ? w2.compareTo(w1) : map.get(w1) - map.get(w2) );
        
        //iterate through the hashmap O(n) -> we only need the word not the frecuency, as we specified the order by (frecuency || word) in the PriorityQueue
        for(String word: map.keySet()){
            //add all of the elements to the heap
            minHeap.add(word);
            //if we have exceeded k capacity, drop the root(smallest element)
            //k capacity limit would make the kth largest position persistant at the root
            if(minHeap.size() > k) {
                minHeap.remove();
            }
        }
        
        // while (!minHeap.isEmpty()) {
        //     top.add(minHeap.poll());
        // } 
        //we can have k elements at most, so remove k elements, always from top
        ArrayList<String> top = new ArrayList();
        for(int i = 0; i < k; i++) {
            top.add(minHeap.remove());
        }
        //reverse as we have it in the reverse order from the heap        
        Collections.reverse(top);
        return top;
    }
}