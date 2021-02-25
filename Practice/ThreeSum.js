//15. 3Sum - https://leetcode.com/problems/3sum/
// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
// Find all unique triplets in the array which gives the sum of zero.
// Notice that the solution set must not contain duplicate triplets.

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

function threeNumberSum(array, targetSum) {
	//first sort it
    array.sort((a,b) => a - b);
	const triplets = [];
	//we want t looop till array.length - 3, because by the time we get to this value, 
	//array.length - 1 and array.length - 2 will have been processed by all the remaining numbers;
	for(let i = 0; i < array.length - 2;i++) {

        // skip the repetition of the same element (the limitation of problem description)------------
        //i > 0 -> it has to be from 2nd element to be a repetition
        //if array[prev] === array[curr] -> same element so there will be a repetition
        if (i > 0 &&  array[i-1] == array[i])  {
            continue;
        }
		//-----------------------------------------------------------------------------------------
		        //we need 2 pointers
        //left will always start at the number next to the one we are processing
        //This is because: by the time we finish processing i, we no longer need to come back to it 
        //as all the required combinations will have been performed.
		let left = i + 1;
		//right will always start at the end
		let right = array.length - 1;
		while(left < right){
			const currentSum = array[i] + array[left] + array[right];
			if(currentSum === targetSum) {
				//we add it to the list of possible values;
				triplets.push([array[i], array[left], array[right]]);
				//the array is sorted, but now we need to keep processing the remaining numbers
                //we need to move both pointers as we only have to choices:
                //-> left same number(not valid by the problem definition) OR diff number, different result
				left++;
                right--;
                //SAVE TIME-----------------------------------------------------------------------------------------
                //skip the repetition of the same element
                //array[newLeft] === array[prevLeft] -> we don't want to process it again, so keep moving the pointer
                while (left < right &&  array[left] === array[left-1] ){
                    left++;
                }
                //skip the repetition of the same element
                while (left < right &&  array[right] === array[right+1] ){
                    right--;
                }
                //-----------------------------------------------------------------------------------------
			} else if(currentSum < targetSum) {
				left++;
			} else if(currentSum > targetSum) {
				right--;
			}
		}
	}
	return triplets;
}