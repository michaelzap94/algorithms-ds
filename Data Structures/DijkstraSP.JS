//Naive Priority Queue O(N * log(N))
class PriorityQueue {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
}
class WeightedGraph {
    constructor(...initialVerteces){
      this.adjacencyList = {};
      if(Array.isArray(initialVerteces) && initialVerteces.length > 0){
        this.adjacencyList = {};
        for (const vertex of initialVerteces) {
          this.adjacencyList[vertex] = [];
        }
      }
    }
    addVertex(vertex){
        //Add new Vertex if not in list(remember: SET)
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1, v2, weight){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;
        this.adjacencyList[v1].push({node: v2, weight});
        this.adjacencyList[v2].push({node: v1, weight});
    }

    // Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0.
    // After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin.
    // Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
    // Start looping as long as there is anything in the priority queue
    // dequeue a vertex from the priority queue
    // If that vertex is the same as the ending vertex - we are done!
    // Otherwise loop through each value in the adjacency list at that vertex
    // Calculate the distance to that vertex from the starting vertex
    // if the distance is less than what is currently stored in our distances object
    // update the distances object with new lower distance
    // update the previous object to contain that vertex
    // enqueue the vertex with the total distance from the start node
    DijkstraSP(start, end){
      const distances = {start: 0};
      const priorityQueue = new PriorityQueue();
      const previous = {};//{A:B, B:C,...}
      const path = [];
      let smallest;
      //build up initial state
      for (const vertex in this.adjacencyList) {
        if(vertex === start){
          distances[vertex] = 0;
        } else {
          distances[vertex] = Infinity;
        }
        priorityQueue.enqueue(vertex, distances[vertex]);
        previous[vertex] = null;
      }

      while(priorityQueue.values > 0){
        smallest = priorityQueue.dequeue().val;//smallest distance
        if(smallest === end){
          //WE ARE DONE, now BUILD UP PATH TO RETURN AT END
          while(previous[smallest]){
              path.push(smallest);
              smallest = previous[smallest];
          }
          break;
        } 
        if(smallest || distances[smallest] !== Infinity){
          
        }
      }
      return path;
    }
}
// {a: [{node:'b', weight: 10},{node:'c', weight: 10}]}
const graph = new WeightedGraph('A','B','C','D','E','F');
graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

graph.DijkstraSP("A", "E");// ["A", "C", "D", "F", "E"]