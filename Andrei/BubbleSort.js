const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
//we need 2 nested loops i, j
//one will go from end to start
//the other one will run as many times as i allows

function bubbleSort(array) {
    let valuesSwappedInLastIteration = false;

    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            //if current value at this index is bigger than next item, swap, else take the next item as the biggest item so far.
            if(array[j] > array[j+1]){
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                valuesSwappedInLastIteration = true;
            }            
        }        
    }

}


bubbleSort(numbers);
console.log(numbers);