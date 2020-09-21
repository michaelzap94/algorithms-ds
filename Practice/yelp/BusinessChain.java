// This problem deals with Chain Businesses i.e businesses that operate in multiple locations.

// The problem was given a list of Buisnesses which are C and a target location return a sorted (ascending) list of Chains. 
// The chains are ordered based on the frequency of occurence. ----> this is the key, it has to be sorted according to the frecuency of occurence
// The list can contain duplicate business chains 
// i.e same business name, id and location appearing more than once. We break frequency ties by ordering the chain names alphabetically.

// My approach was to use a Set to keep track of chains I had seen before, 
// a Map to hold the business name to Chain/Frequency relationship 
// and finally a Priority Queue to help with the ordering.
static class Business {
    String name;
    String location;
    String id;

    Business(String name, String location, String id) {
        this.name = name;
        this.location = location;
        this.id = id;
    }
}

static class Chain {
    String name;
    Integer frequency;

    Chain(String name, Integer frequency) {
        this.name = name;
        this.frequency = frequency;
    }
}

public static List<Chain> detectAndOrderChainBusiness(List<Business> businesses, String location) {

    Set<String> seen = new HashSet<>();
    HashMap<String, Chain> chains = new HashMap<>();

    for (Business business : businesses) {
        if (business.location.equals(location) && !seen.contains(business.name + business.id)) {
            //mark this business as seen
            seen.add(business.name + business.id);
            //if we have added this business to the chain already, increase the frecuency
            if (chains.containsKey(business.name)) {
                //get existing chain, and increase frecuency
                chains.get(business.name).frequency++;
            } else {
                //else, put new chain, using the business name and init to one
                chains.put(business.name, new Chain(business.name, 1));
            }
        }
    }

    //descending order, higher frecuency on top
    PriorityQueue<Chain> chain = new PriorityQueue<>(new CompareChain());
    // add all chains to the PriorityQueue, it will make sure the higher frecuency goes on top. 
    for (Map.Entry<String, Chain> entry : chains.entrySet()) {
        chain.add(entry.getValue());
    }

    ArrayList<Chain> chains1 = new ArrayList<>();
    //since higher frecuency is on top, do it like this
    while (!chain.isEmpty()) {
        chains1.add(chain.poll());
    }

    return chains1;

}

static class CompareChain implements Comparator<Chain> {
    public int compare(Chain one, Chain two) {
        //if 2 businesses have the same frecuency
        if (one.frequency.equals(two.frequency)) {
            //use the name to compare them
            return one.name.compareTo(two.name);
        }
        // The compare() method of Integer class of java.lang package compares two integer values (x, y) given
        // as a parameter and returns the value zero if (x==y), if (x < y) then it returns a value less than zero and
        // if (x > y) then it returns a value greater than zero.
        return Integer.compare(one.frequency, two.frequency);
    }
}