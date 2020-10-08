class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    
    addVertex(vertex) {
        //if vertex is not already in the list, include it
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    
    addEdge(from, to) {
        this.addVertex(from);
        this.addVertex(to);
        this.adjacencyList[from].push(to);
    }
    
        // Returns true if the graph contains a  
    // cycle, else false. 
    // This function is a variation of DFS() in  
    isCyclic() { 
        // Mark all the vertices as not visited and not part of recursion stack 
        let visited = {}; 
        // recStack stands for ‘recursion stack’, and it’s what’s keeping track of the back edges, 
        // the vertices we visited to get us to our current vertex.
        let recStack = {};
        // Call the recursive helper function to detect cycle in different DFS trees 
        for (let node in this.adjacencyList) {
            //if a cycle, return true, else keep processing the rest of the vertices
            if (this.isCyclicUtil(node, visited, recStack)) {
                return true; 
            }
        }
        //if no cycle, then return false
        return false; 
    } 

    isCyclicUtil(node, visited, recStack) { 
        // we’re checking to see if a particular edge is in our recStack, which would mean that we’ve already visited it. 
        if (recStack[node]) 
            return true; 
        // if we have visited already, no need to visit again.
        if (visited[node]) 
            return false; 

        // Mark the current node as visited and part of recursion stack 
        visited[node] = true; 
        recStack[node] = true; 

        // This time we’re not just checking to see if we’ve visited them or not — 
        // we’re checking to see if a particular edge is in our recStack, which would mean that we’ve already visited it. 
        // That’s our indicator that we’ve found a cycle.
        for (let neighbour of this.adjacencyList[node]) {
            if (this.isCyclicUtil(neighbour, visited, recStack)) {
                return true; 
            }
        }
        // If the vertex isn’t in our recStack, than we pop it off the recursion stack 
        // so we won’t get a false positive as we traverse another path through the graph.
        recStack[node] = false; 
        return false; 
    } 
    showConnections() { 
        const allNodes = Object.keys(this.adjacencyList); 
        for (let node of allNodes) { 
          let nodeConnections = this.adjacencyList[node]; 
          let connections = ""; 
          let vertex;
          for (vertex of nodeConnections) {
            connections += vertex + " ";
          } 
          console.log(node + "-->" + connections); 
        } 
    } 
}

function createGraph(numCourses, prerequisites){
    const graph = new Graph();
    for(const [newCourse,requiredCourse] of prerequisites) {
        //to take the newCourse you require the requiredCourse: N -> R
        graph.addEdge(newCourse, requiredCourse);
    }
    return graph;
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = createGraph(numCourses, prerequisites);
    
    graph.showConnections();

    //if there's a cycle then it means it cannot be finished
    return graph.isCyclic();
};

console.log(canFinish(2, [[1,0],[0,1]]));