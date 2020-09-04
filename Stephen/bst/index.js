// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.rigth = null;
    }

    // insert(data) {
    //     // INSERT WHEN WE REACH TO A LEAF
    //     let current = this;//this will be the root -> new BST(value)
    //     while(true){
    //         if(data < current.data){
    //             //check if node on the left is a leaf -> null
    //             if(current.left == null){
    //                 //if so, insert new BST(data) node here:
    //                 current.left = new Node(data);
    //                 break;
    //             } else {
    //                 //else just move to the next node;
    //                 current = current.left;
    //             }
    //         } else if(data > current.data){
    //             //check if node on the right is a leaf -> null
    //             if(current.right == null){
    //                 //if so, insert new BST(data) node here:
    //                 current.right = new Node(data);
    //                 break;
    //             } else {
    //                 //else just move to the next node;
    //                 current = current.right;
    //             }
    //         } else {
    //             break;//if data already exists we just break
    //         }
    //     }
        
    //     return this;
    //   }
}

module.exports = Node;
