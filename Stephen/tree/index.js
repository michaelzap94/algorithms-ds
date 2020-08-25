// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data){
        this.data = data;
        this.children = [];
    }

    add(data) {
        const node = new Node(data);
        this.children.push(node);
    }

    //remove this data, eg: 3!==3 -> false, so remove it
    remove(data) {
        //with filter, if true(keep it), if false(remove it)
        this.children = this.children.filter((child) => {return child.data !== data})
    }
}

class Tree {
    constructor(){
        this.root = null;
    }
    
    ////I am returning EACH node in the callback, not all together in an array 'data'
    traverseBF(fn) {
        //const data = [];
        const queue = [this.root];
        while(queue.length > 0) {
            const node = queue.shift();
            queue.push(...node.children);
            fn(node);
            //data.push(node);
        }
        //return data;
    }

    ////I am returning EACH node in the callback, not all together in an array 'data'
    traverseDF(fn){
        //const data = [];
        const stack = [this.root];
        while(stack.length > 0) {
            const node = stack.shift();
            stack.unshift(...node.children);
            fn(node);
            //data.push(node);
        }
        //return data;
    }
}

module.exports = { Tree, Node };
