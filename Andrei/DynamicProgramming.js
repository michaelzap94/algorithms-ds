function addTo80(n) {
  return n + 80;
}
addTo80(5);
//-------------------------------------------------
//learn to cache
let cache = {}; //bad practice -> should not be in the global scope;
function memoizeAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log("long time");
    const answer = n + 80;
    cache[n] = answer;
    return answer;
  }
}
//-------------------------------------------------
// let's make that better with no global scope. This is closure in javascript so.
function memoizeAddTo80(n) {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("long time");
      const answer = n + 80;
      cache[n] = answer;
      return answer;
    }
  };
}
const memoized = memoizeAddTo80();
//now because of closures -> "memoized" will not only reference a function(),
//but will also keep the state of the variables inside it.
//so it is like a small object, keeping the state of its variables, with some function that can be called.
console.log(1, memoized(6));
console.log(2, memoized(6));
