class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null;
  }

  // isValid_own(root) {
  //   if (root === null) return true;
  //   const queue = [root];
  //   while (queue.length) {
  //     const currentNode = queue.shift();
  //     if (currentNode.left) {
  //       //if the currentNode.left.val is bigger than current node's value, it's not a bst
  //       if (currentNode.val <= currentNode.left.val) {
  //         return false;
  //       }
  //       //else we need to keep looking to all of it's nodes
  //       queue.push(currentNode.left);
  //     }
  //     if (currentNode.right) {
  //       if (currentNode.val >= currentNode.right.val) {
  //         return false;
  //       }
  //       queue.push(currentNode.right);
  //     }
  //   }
  //   return true;
  // }

  dfs_preorder() {
    let visited = [];
    function helper(node) {
      //visited.push(node.value);
      if(node.left) helper(node.left);
      if(node.right) helper(node.right);
    }
    helper(this.root);
    return visited;
  }

  validate(node, min = null, max = null) {
    //O(n)T, O(d) T as we are using space on the call stack.
    //when we reach the leaf, return true, as it means, it is a valid bst
    if (!node) return true;

    //if the current value, does not respect the boundaries, it's not a VALID bst

    //if the max is null, it means we have not seen a left branch yet, so checking if node.val >= max, makes no sense
    if (max !== null && node.val >= max) {
      return false;
    }

    //if the min is null, it means we have not seen a right branch yet, so checking if node.val <= min, makes no sense
    if (min !== null && node.val <= min) {
      return false;
    }

    //if the subtree from the left is not valid, return false
    //since we are moving to the left, the next child node on the left should obey the rules:
    //where it is smaller than this node.val, which will be the upper bound(max)
    //AND the min value will be inherited from the previous node(GrandParent)
    if (node.left && !validate(node.left, min, node.val)) {
      return false;
    }
    //if the subtree from the right is not valid, return false
    //since we are moving to the right, the next child node on the right should obey the rules:
    //where it is bigger than this node.val, which will be the lower bound(min)
    //AND the max value will be inherited from the previous node(GrandParent)
    if (node.right && !validate(node.right, node.val, max)) {
      return false;
    }

    return true;
  }

  validate_short(node, min = null, max = null) {
    //O(n)T, O(d) T as we are using space on the call stack.
    //when we reach the leaf, return true, as it means, it is a valid bst
    if (node === null) return true;
    //if the current value, does not respect the boundaries, it's not a VALID bst
    if ((max !== null && node.value >= max) || (min !== null && node.value < min)) {
      return false;
    }
    return validate_short(node.left, min, node.value) && validate_short(node.right, node.value, max);
  }

}
