class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    // Create a new node
    // Starting at the root
    // Check if there is a root, if not - the root now becomes that new node!
    // If there is a root, check if the value of the new node is greater than or less than the value of the root
    // If it is greater 
    //  Check to see if there is a node to the right
    //      If there is, move to that node and repeat these steps
    //      If there is not, add that node as the right property
    // If it is less
    //  Check to see if there is a node to the left
    //      If there is, move to that node and repeat these steps
    //      If there is not, add that node as the left property
    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true){
                if(value < current.value){//goes to the left
                    if(current.left === null){// if there's nothing on the left
                        current.left = newNode;//insert it here
                        return this;
                    } else {//make this left Node the current(next Parent)
                        current = current.left;
                    }
                } else if(value > current.value) {//goes to the right
                    if(current.right === null){// if there's nothing on the left
                        current.right = newNode;//insert it here
                        return this;
                    } else {//make this right Node the current(next Parent)
                        current = current.right;
                    }
                } else {
                    return undefined;
                }
            }
        }
    }
    // Starting at the root
    // Check if there is a root, if not - we're done searching!
    // If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
    // If not, check to see if the value is greater than or less than the value of the root
    // If it is greater 
    //  Check to see if there is a node to the right
    //      If there is, move to that node and repeat these steps
    //      If there is not, we're done searching!
    // If it is less
    //  Check to see if there is a node to the left
    //      If there is, move to that node and repeat these steps
    //      If there is not, we're done searching!
    find(value){
        if(!this.root){
            return false;
        } else {
            let current = this.root;
            let found = false;
            //at some point, if not found, current.left or .right will be null;
            while(current && !found){
                if (value < current.value) {
                    current = current.left;
                }
                else if (value > current.value) {
                    current = current.right;
                } else {
                    found = true;
                }
            }
            return found;
        }
    }
    // Create a queue (this can be an array) and a variable to store the values of nodes visited
    // Place the root node in the queue
    // Loop as long as there is anything in the queue
    // Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    // If there is a left property on the node dequeued - add it to the queue
    // If there is a right property on the node dequeued - add it to the queue
    // Return the variable that stores the values
    BFS(){
        const queue = [];//not efficient, You should use your own queue.
        const visited = [];
        if(!this.root){
            return [];
        } else {
            let current = this.root;
            queue.push(current);
            while(queue.length != 0){
                current = queue.shift();
                visited.push(current.value);
                if(current.left){
                    queue.push(current.left);
                }
                if(current.right){
                    queue.push(current.right);
                }
            }
            return visited;
        }
    }
    // Create a variable to store the values of nodes visited
    // Store the root of the BST in a variable called current
    // Write a helper function which accepts a node
    //  Push the value of the node to the variable that stores the values
    //  If the node has a left property, call the helper function with the left property on the node
    //  If the node has a right property, call the helper function with the right property on the node
    // Invoke the helper function with the current variable
    // Return the array of values
    DFS_PreOrder(){// RECURSIVELY
        const visited = [];
        let current = this.root;
        function helper(hNode){
            visited.push(hNode.value);
            if(hNode.left) helper(hNode.left);
            if(hNode.right) helper(hNode.right);
        }
        helper(current);
        return visited;        
    }
    // Create a variable to store the values of nodes visited
    // Store the root of the BST in a variable called current
    // Write a helper function which accepts a node
    //  If the node has a left property, call the helper function with the left property on the node
    //  If the node has a right property, call the helper function with the right property on the node
    //  Push the value of the node to the variable that stores the values
    // Invoke the helper function with the current variable
    // Return the array of values
    DFS_PostOrder(){// RECURSIVELY
        const visited = [];
        let current = this.root;
        function helper(hNode){
            if(hNode.left) helper(hNode.left);
            if(hNode.right) helper(hNode.right);
            visited.push(hNode.value);
        }
        helper(current);
        return visited;        
    }
    // Create a variable to store the values of nodes visited
    // Store the root of the BST in a variable called current
    // Write a helper function which accepts a node
    //  If the node has a left property, call the helper function with the left property on the node
    //  Push the value of the node to the variable that stores the values
    //  If the node has a right property, call the helper function with the right property on the node
    // Invoke the helper function with the current variable
    // Return the array of values
    DFS_InOrder(){// RECURSIVELY
        const visited = [];
        let current = this.root;
        function helper(hNode){
            if(hNode.left) helper(hNode.left);
            visited.push(hNode.value);
            if(hNode.right) helper(hNode.right);
        }
        helper(current);
        return visited;        
    }  
    /* Given a binary tree. Print its nodes in level order 
       using array for implementing queue */
       size(){ 
           return size(root); 
       } 
    /* computes number of nodes in tree */
       size(node){ 
           if (node == null) return 0; 
           else
               return(size(node.left) + 1 + size(node.right)); 
       } 
}
var myBST = new BST();
myBST.insert(10);
myBST.insert(6);
myBST.insert(15);
myBST.insert(3);
myBST.insert(8);
myBST.insert(2);
myBST.insert(4);
myBST.insert(7);
myBST.insert(20);
console.log(myBST.DFS_PreOrder());//[ 10, 6, 3, 2, 4, 8, 7, 15, 20 ]
console.log(myBST.DFS_PostOrder());//[ 2, 4, 3, 7, 8, 6, 20, 15, 10 ]
console.log(myBST.DFS_InOrder());//[ 2, 3, 4, 6, 7, 8, 10, 15, 20 ]