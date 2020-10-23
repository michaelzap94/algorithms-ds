// Given a collection of intervals, merge all overlapping intervals.
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (!intervals.length) return intervals
    //[[1,4],[0,4]] -> 1 !== 0 ? 1 - 0 : 4 - 4
    //if the start is not the same, we sort them by start, otherwise, by end(if they are the same)
    //this is because intervals[i][0] <= intervals[i][1] -> start and end can be the same [0,0] OR [1,1], etc
    intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])
  
    var prev = intervals[0]
    var res = [prev]
    for (var curr of intervals) {
      if (curr[0] <= prev[1]) {
        prev[1] = Math.max(prev[1], curr[1])
      } else {
        res.push(curr)
        prev = curr
      }
    }
    return res
  
  };
//-----------------------------------------------------------------------------------------
var merge = function(intervals) {
  if (!intervals.length) return intervals
  
  intervals.sort((a, b) => a[0] - b[0])

  var currentInterval = intervals[0]
  var result = [currentInterval]
  for (var interval of intervals) {
      let currentBegin = currentInterval[0];
      let currentEnd = currentInterval[1];
      let nextBegin = interval[0];
      let nextEnd = interval[1];
      if(currentEnd >= nextBegin) {
          //currentInterval[1] END SHOULD BE either current end or next end
          currentInterval[1] = Math.max(currentEnd, nextEnd);
      } else {
          //move currentInterval to this Interval
          currentInterval = interval;
          result.push(currentInterval);
      }
  }
  return result

};