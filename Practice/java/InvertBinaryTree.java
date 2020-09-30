import java.util.*;

class InvertBinaryTree {

     //O(n) TS
  public static void invertBinaryTreeRecursive(BinaryTree tree) {
    if(tree == null) return;
    swapNodes(tree);
    invertBinaryTreeRecursive(tree.left);
    invertBinaryTreeRecursive(tree.right);
  }
    
  //O(n) TS
  public static void invertBinaryTree(BinaryTree tree) {
    ArrayDeque<BinaryTree> queue = new ArrayDeque<>();
		//we add the root node first
		queue.addLast(tree);
		//iterate through queue
		while(queue.size() > 0) {
			BinaryTree currentNode = queue.pollFirst();
			//swap the children of currentNode
			swapNodes(currentNode);
			//push this nodes to the queue
			if(currentNode.left != null) queue.addLast(currentNode.left);
			if(currentNode.right != null) queue.addLast(currentNode.right);
		}
			
		
  }
	
	private static void swapNodes(BinaryTree currentNode) {
		BinaryTree temp = currentNode.left;
		currentNode.left = currentNode.right;
		currentNode.right = temp;
	}

  static class BinaryTree {
    public int value;
    public BinaryTree left;
    public BinaryTree right;

    public BinaryTree(int value) {
      this.value = value;
    }
  }

}
