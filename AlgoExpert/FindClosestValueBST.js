function findClosestValueInBst(tree, target) {
	//let's assume the closest value is infinity
	let closest = Infinity;
  // we'll start at the root.
	let current = tree;
	//loop as long as the current node is not null -> not a leaf
	//it will stop when we get to the end of some branch
	while(current != null){
		//update the closest value
		//if the difference between the current.value - target 
		// is less than the difference between the previoustclosest.value - target = this will be the new closest value.
		if(Math.abs(current.value - target) < Math.abs(closest - target)){
			closest = current.value;
		}		
		//MOVING Nodes
		if(target < current.value) {
			//move left
			current = current.left;
		} else if (target > current.value) {
			//move right
			current = current.right;
		} else {
			break;//the current.value === target we exit as it is the EXACT value ( no better value)
		}
	}
	return closest;
}