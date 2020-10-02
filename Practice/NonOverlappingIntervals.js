// Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
// Input: [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.

function eraseOverlapIntervals(intervals) {
    //keep track of how many intervals we are dealing with
    const len = intervals.length;
    //if no intervals, return 0 non overlaps
    if(len == 0) return 0;
    //sort the intervals, using the END number [START, END], in ascending order
    //this is to avoid false positives, as, the end will always be larger than the start,
    //we'll make sure the list is properly ordered by the finished time
    intervals.sort((a, b) => a[1] - b[1]);
    //we get the end of the first interval
    let end = intervals[0][1];
    let count = 1;//this is already one interval that should not overlap
    //we start at the next interval, so we don't repeat ourselves
    for(let i = 1; i < len; i++){
        //we compare the end of the first interval, with the start of the next interval,
        //if for some reason, it is bigger or the same, they DO NOT OVERLAP, so increase counter
        //and move to that interval
        const startOfCurrInterval = intervals[i][0];
        if(startOfCurrInterval >= end){
            end = intervals[i][1];//move end to the end of this current interval
            count++;
        }
    }
    //count will represent the number of intervals that do not overlap, hence, we just substract it from the length of all intervals
    return len - count;
}