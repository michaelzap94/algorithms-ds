//stack using array -> push/pop
//we need to keep track of all min and max at any push
class MinMaxStack {
  constructor() {
    this.stack = [];
    this.minMaxHistory = [];
    // not possible since you need to keep track of all min and max at any push 
    // this.minIndex = null;
    // this.maxIndex = null;
  }
  peek() {
    // fetch the value at the top of the stack
    return this.stack[this.stack.length - 1];
  }

  pop() {
      if(this.stack.length === 0) return;
      //just pop the latest pair of [min, max], this way the new latest will be the prev pair
      this.minMaxHistory.pop();
      return this.stack.pop();


    //   if(this.stack.length === 0){
    //     this.minIndex = null;
    //     this.maxIndex = null;
    //   } else {
    //     if (popped === this.stack[maxIndex]) {
    //         this.maxIndex = number;
    //     } else if (popped === this.stack[minIndex]) {
    //         this.minIndex = number;
    //     }
    //   }
  }

  push(number) {
    this.stack.push(number);
    if (this.minMaxHistory.length === 0) {
        //if first push: the same sumber will be both min and max
        this.minMaxHistory.push([number,number]);
    } else {
        //if there's something in the stack compare the prev minMax to the new minMax
        //1) get index of latests element
        const latestMinMaxIndex = this.minMaxHistory.length - 1;
        //2) get latest min and max values
        const [min, max] = this.minMaxHistory[latestMinMaxIndex];
        //3) compare and create new min max for the new value
        const newMin = Math.min(min, number);
        const newMax = Math.max(max, number);
        //4) add new min and max values to the history
        this.minMaxHistory.push([newMin, newMax]);
    }
    // const newNumberIndex = this.stack.length;
    // //the first time we add a number this.minIndex and this.maxIndex should be null
    // if (this.stack.length === 0 && this.minIndex === null && this.maxIndex === null) {
    //   this.minIndex = newNumberIndex;
    //   this.maxIndex = newNumberIndex;
    // } else {
    //   //otherwise compare to see if this new number should be minIndex or maxIndex;
    //   if (number > this.stack[maxIndex]) {
    //     this.maxIndex = newNumberIndex;
    //   } else if (number < this.stack[minIndex]) {
    //     this.minIndex = newNumberIndex;
    //   }
    // }
  }

  getMin() {
    //if we loop then it will not be constant time
    //therefore keeping track of all min max at every step:
    const latestMinMaxIndex = this.minMaxHistory.length - 1;
    return this.minMaxHistory[latestMinMaxIndex][0];
  }

  getMax() {
    //if we loop then it will not be constant time
    //therefore keeping track of all min max at every step:
    const latestMinMaxIndex = this.minMaxHistory.length - 1;
    return this.minMaxHistory[latestMinMaxIndex][1];
  }
}
