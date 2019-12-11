// BubbleSort Pseudocode:
// WE only need to loop MAX (arr.length) times, since the bigger element will always bubble up to the top.
// To optimize this, we need to make sure, we don't compare the biggest element after it has been sorted.

// BONUS) SOMETIMES, we can FINISH sorting the array before we get to (arr.length) times. To stop the code from 
// keeping looping, we can check if we swapped any values in the last iteration., if not-> END LOOP(return arr)
// 1) Start looping from with a variable called i the end of the array towards the beginning
// 2) Start an inner loop with a variable called j from the beginning until i - 1:
//    because when we GET to the last item, we compare j(last item) to j+1(undefined) -> UNNECESSARY
//    also, we don't want to compare/get to the Biggest element which has been sorted already.
//    AS i goes down, so does j, so we don't compare the Bigger elements(already sorted)
// 3) If arr[j] is greater than arr[j+1], swap those two values!
// 4) Return the sorted array

function bubbleSortUnoptimized(arr){
    let valuesSwappedInLastIteration;
        // Start looping from the end of the array towards the beginning
    for (let i = arr.length; i > 0; i--) {
        valuesSwappedInLastIteration = false;
        // Start an inner loop with a variable called j from the beginning until i - 1, AS i goes down, so does j
        for(let j = 0; j< i-1; j++){
            // If arr[j] (LEFT) is greater than arr[j+1] (RIGHT), swap those two values!
            if(arr[j] > arr[j+1]){
                swapValues(arr, j, j+1);//WILL modify the arr being passed as argument
                valuesSwappedInLastIteration = true;
            }
        }
        //BONUS) we can check if we swapped any values in the last iteration., if not-> END LOOP(return arr)
        if(!valuesSwappepLastIteration) break;
    }
    return arr;// Return the sorted array
}
function swapValues(arr, a,b){
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    valuesSwappepLastIteration = true;
    //return arr;//NOT NEEDED AS WE'LL MODIFY THE ORIGINAL ARRAY.
}
//Time complexity: O(n^2);
//TESTS:
console.log(bubbleSortUnoptimized([8,1,2,3,4,5,6,7])); //[ 1, 2, 3, 4, 5, 6, 7, 8 ]