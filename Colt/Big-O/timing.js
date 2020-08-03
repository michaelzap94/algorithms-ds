const {performance} = require('perf_hooks');

function addUpToSlow(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
function addUpToFast(n) {
    return n * (n + 1) / 2;
}

var t1 = performance.now();
addUpToFast(100000000000);
var t2 = performance.now();
var fastTimeDiff = (t2 - t1) / 1000;
console.log(`addUpToFast Time Elapsed: ${fastTimeDiff} seconds.`)

var time1 = performance.now();
addUpToSlow(100000000000);
var time2 = performance.now();
var slowTimeDiff = (time2 - time1) / 1000;
console.log(`addUpToSlow Time Elapsed: ${slowTimeDiff} seconds.`)




console.log('Difference in seconds: ', (Math.abs(fastTimeDiff-slowTimeDiff)));
console.log(`Difference in percentage: ${((Math.abs(fastTimeDiff-slowTimeDiff)*100)/(fastTimeDiff+slowTimeDiff)).toFixed(2)}%`);

//1000000000
// addUpToSlow Time Elapsed: 1.0922357000000775 seconds.
//     addUpToFast Time Elapsed: 0.00011020100116729736 seconds.
//     Difference in seconds:  1.0921254989989102
// Difference in percentage: 99.98%

//100000000000
//addUpToFast Time Elapsed: 0.00025400100089609625 seconds.
