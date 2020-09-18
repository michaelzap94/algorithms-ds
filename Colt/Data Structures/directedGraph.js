class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        //Add new Vertex if not in list(remember: SET)
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    // Find in the adjacency list the key of vertex1 and push vertex2 to the array
    // Find in the adjacency list the key of vertex2 and push vertex1 to the array
    // Don't worry about handling errors/invalid vertices 
    addEdge(from, to){
        if(!this.adjacencyList[from] || !this.adjacencyList[to]) return false;
        this.adjacencyList[from].push(to);
    }

    dfs() {
        const seen = {};
        let visited = [];
        //iterate trough all the vertices
        for (let vertex in this.adjacencyList) {
            this._dfsUtil(vertex, seen, visited);
        }
        return visited;
    }

    _dfsUtil(vertex, seen, visited) {
        //if we have not processed it yet //process it
        if(!seen[vertex]){
            //we have seen it now
            seen[vertex] = true;
            //push to visited
            visited.push(vertex);
            for (let neighbour of this.adjacencyList[vertex]) {
                //now process its children
                this._dfsUtil(neighbour, seen, visited);
            }
        }
    }

    dfs_own(vertex){
        const returnedList = [];
        const visited = {};//{nodeA:true}
        const adjacencyList = this.adjacencyList;
        function helper(vertex){
            if(!vertex){
                return;
            } else {
                visited[vertex] = true;
                returnedList.push(vertex);
                for (let neighbour of adjacencyList[vertex]) {
                    if(!visited[neighbour]){
                        helper(neighbour);
                    }                      
                }
            }
        };
        helper(vertex);
        return returnedList;
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

var g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
// g.addEdge("F","D")
console.log(g.showConnections);
console.log(g.dfs())
console.log(g.isCyclic())
console.log(g.dfs_own("A"));