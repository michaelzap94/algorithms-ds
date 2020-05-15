// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // INSERT WHEN WE REACH TO A LEAF
    // Do not edit the return statement of this method.
    let current = this;//this will be the root -> new BST(value)
    while(true){
        if(value < current.value){
            //check if node on the left is a leaf -> null
            if(current.left == null){
                //if so, insert new BST(value) node here:
                current.left = new BST(value);
                break;
            } else {
                //else just move to the next node;
                current = current.left;
            }
        } else if(value > current.value){
            //check if node on the right is a leaf -> null
            if(current.right == null){
                //if so, insert new BST(value) node here:
                current.right = new BST(value);
                break;
            } else {
                //else just move to the next node;
                current = current.right;
            }
        } else {
            break;//if value already exists we just break
        }
    }
    
    return this;
  }

  contains(value) {
    // SINCE BST you can traverse moving left or right using the current.value and updating current
    let contains = false;
    let current = this;
    //current will be null if we reach to a leaf, which means we got to the end of the search
    while(current !== null && contains === false){
        if(value < current.value){
            current = current.left;
        } else if(value > current.value) {
            current = current.right;
        } else {
            // if value == current.value
            contains = true;//return true
        }
    }
    return contains;
  }

  remove(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }
}

const c = new BST(10);
c.insert(11);
