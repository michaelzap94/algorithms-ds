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
    
}


