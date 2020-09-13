class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        //check if there's something in the root, if not, make newNode the root
        if(!this.root){
            this.root = newNode;
        } else {
            //use the root as first node
            let currentNode = this.root; // or this if BST is also the Node
            //iterate till we find a spot to insert
            while(true) {
                //compare the currentNode.value with the value you want to insert
                //if new value is smaller go left, else go right, if same finish loop as there can be no duplicates
                //if you went left/right, check if there's a node there, if so, repeat using that node as the new root/currentNode
                //else, insert it there and break;
                if(value < currentNode.value) {
                    if(currentNode.left === null) {
                        currentNode.left = newNode;
                        break;
                    } else {
                        currentNode = currentNode.left;
                        continue;
                    }
                } else if (value > currentNode.value) {
                    if(currentNode.right === null) {
                        currentNode.right = newNode;
                        break;
                    } else {
                        currentNode = currentNode.right;
                        continue;
                    }
                } else {
                    break;
                }
            } 
        }
        return this;
    }

    lookup(value) {
        //if no root, then no values, so false
        if(!this.root) {
            return false;
        } else {
            //use the root as first node
            let currentNode = this.root;
            //iterate till we find value or the latest currentNode is null/leaf
            while(currentNode !== null) {
                if(value === currentNode.value) return currentNode;
                if(value < currentNode.value) currentNode = currentNode.left;
                if(value > currentNode.value) currentNode = currentNode.right;
            }
            //if no value was found return false;
            return false;
        }
    }

    remove() {
        
    }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.lookup(15))
console.log(JSON.stringify(traverse(tree.root)))

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  