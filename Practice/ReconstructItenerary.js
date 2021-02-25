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

    addEdge(from, to){
        //if any of the vertices does not exist -> create it
        if(!this.adjacencyList[from]) {
            this.addVertex(from);
        } 
        if(!this.adjacencyList[to]) {
            this.addVertex(to);
        }
        this.adjacencyList[from].push(to);
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

    dfs(node, output = []) {
        //if there's still some neighbours for this user
        const neighbors = this.adjacencyList[node] || [];
        while (neighbors.length) {
        //remove first neighour
          const v = neighbors.shift();
          //traverse through it
          this.dfs(v, output);
        }
        output.push(node);
        return output;
      }

}

function createGraph(tickets) {
    const graph = new Graph();
    for(let [from,to] of tickets) {
        graph.addEdge(from,to);
    }
    //sort neighbours in lexical order
    for (const key in graph.adjacencyList) {
        graph.adjacencyList[key].sort();
    }
    return graph;
}

// const g = createGraph([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]);
// g.showConnections();
// console.log(g.dfs("JFK"));

const g = createGraph([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]);
g.showConnections();
console.log(g.dfs("JFK").reverse());
