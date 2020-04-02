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
    addEdge(v1, v2){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    // Reassign the key of vertex1 to be an array that does not contain vertex2
    // Reassign the key of vertex2 to be an array that does not contain vertex1
    // Don't worry about handling errors/invalid vertices FOR THIS VERSION
    removeEdge(v1,v2){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;
        const indexOfV1inV2 = this.adjacencyList[v1].indexOf(v2);
        const indexOfV2inV1 = this.adjacencyList[v2].indexOf(v1);
        if (indexOfV1inV2 !== -1) this.adjacencyList[v1].splice(indexOfV1inV2, 1);
        if (indexOfV2inV1 !== -1) this.adjacencyList[v2].splice(indexOfV2inV1, 1);
        // ALTERNATIVE: 
        // this.adjacencyList[v1] = this.adjacencyList[v1].filter( v => v !== v2 );
        // this.adjacencyList[v2] = this.adjacencyList[v2].filter( v => v !== v1 );
    }
    // The function should loop as long as there are any other vertices in the adjacency list for that vertex
    // In the loop: use removeEdge(vertex we are removing, any values in the adjacency list for that vertex)
    // Delete the key in the adjacency list for that vertex
    removeVertex(vertex){
        for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
            this.removeEdge(vertex, this.adjacencyList[vertex][i]);           
        }
        delete this.adjacencyList[vertex];
    }

    // DFS(vertex):
    // if vertex is empty
    //     return (this is base case)
    // add vertex to results list
    // mark vertex as visited
    // for each neighbor in vertex's neighbors:
    //    if neighbor is not visited:
    //       recursively call DFS on neighbor
    //===============================================================
    // Create a list to store the end result, to be returned at the very end
    // Create an object to store visited vertices
    // Create a helper function which accepts a vertex
    // The helper function should return early if the vertex is empty
    // The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
    // Loop over all of the values in the adjacencyList for that vertex
    //  If any of those values have not been visited, recursively invoke the helper function with that vertex
    // Invoke the helper function with the starting vertex
    // Return the result array
    dfs(vertex){
        const returnedList = [];
        const visited = {};//{nodeA:true}
        const adjacencyList = this.adjacencyList;
        function helper(vertex){
            if(!vertex){
                return null;
            } else {
                visited[vertex] = true;
                returnedList.push(vertex);
                // for (let i = 0; i < adjacencyList[vertex].length; i++) {
                //     if(!visited[adjacencyList[vertex][i]]){
                //         helper(adjacencyList[vertex][i]);
                //     }                      
                // } ///OR:( NOTICE THE return keyword in FOR loops will stop execution of remaining neighbors)
                adjacencyList[vertex].forEach(neighbor => {
                    if(!visited[neighbor]){
                        return helper(neighbor);
                    }  
                });
            }
        };
        helper(vertex);
        return returnedList;
    }
    
    // DFS-iterative(start):
    // let S be a stack
    // S.push(start)
    // while S is not empty
    //     vertex = S.pop()
    //     visit vertex (add to result list)
    //     for each of vertex's neighbors, N do 
    //          if vertex is not labeled as discovered:
    //             S.push(N)
    //             label vertex as discovered
    //===========================================
    // Create a stack to help use keep track of vertices (use a list/array)
    // Create a list to store the end result, to be returned at the very end
    // Create an object to store visited vertices
    // Add the starting vertex to the stack, and mark it visited
    // While the stack has something in it:
    // Pop the next vertex from the stack
    // Add it to the result list
    // LOOP trough the element POPPED's neighbours
    // If that vertex hasn't been visited yet:
    // ​    Mark it as visited
    //     Push it to the stack
    // Return the result arrays
    dfs_iter(start){
        const stack = [start];
        const actualVisitedList = [];
        const seen = {[start]: true};
        let vertex;
        while(stack.length){
            vertex  = stack.pop();
            actualVisitedList.push(vertex);
            for (const neighbour of this.adjacencyList[vertex]) {
                if(!seen[neighbour]){
                    seen[neighbour] = true;
                    stack.push(neighbour);
                }
            }
        }
        return actualVisitedList;
    }

    // Create a queue (you can use an array) and place the starting vertex in it
    // Create an array to store the nodes visited
    // Create an object to store nodes visited
    // Mark the starting vertex as visited
    // Loop as long as there is anything in the queue
    //  Remove the first vertex from the queue and push it into the array that stores nodes visited
    //  Loop over each vertex in the adjacency list for the vertex you are visiting.
    //      If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
    // Once you have finished looping, return the array of visited nodes
    bfs(start){
        const queue = [start];
        const actualVisitedList = [];
        const seen = {[start]:true};
        let vertex;
        while(queue.length){
            vertex = queue.shift();
            actualVisitedList.push(vertex);
            for (const neighbor of this.adjacencyList[vertex]) {
                if(!seen[neighbor]){
                    seen[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
        return actualVisitedList;
    }
}
// var mGraph = new Graph();
// mGraph.addVertex('A');
// mGraph.addVertex('B');
// mGraph.addVertex('C');
// mGraph.addEdge('A','B');
// mGraph.addEdge('A','C');
// mGraph.addEdge('B','C');
// console.log(mGraph.adjacencyList); //{ A: [ 'B', 'C' ], B: [ 'A', 'C' ], C: [ 'A', 'B' ] }
// mGraph.removeEdge('B','C');
// console.log(mGraph.adjacencyList); //{ A: [ 'B', 'C' ], B: [ 'A' ], C: [ 'A' ] }
// mGraph.removeVertex('B');
// console.log(mGraph.adjacencyList); //{ A: [ 'C' ], C: [ 'A' ] }g.addVertex("A")

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
console.log(g.dfs("A"));//[ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log(g.dfs_iter("A"));//[ 'A', 'C', 'E', 'F', 'D', 'B' ]
console.log(g.bfs("A"));//[ 'A', 'B', 'C', 'D', 'E', 'F' ]