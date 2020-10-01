/** 
Calculate what percentage of a given time frame a business is open.
INPUTS: 
    - 1: a time range to query for.(start, end). eg: I am free from (3,4)
    - 2: a business's open hours [(start1,end1), (start2,end2)]
OUTPUTS: FLOAT(not rounded number)
    the fraction of the query time range that the business is open.
    i.e. the percentage of the query range in which the business is open

ASSUMPTIONS:
    - open hours time ranges are in order, NON OVERLAPPING
    - (0 <= start) < (end <= 24)
    
Examples:
Query Time Range    Open Hours            Answer
(4, 10)             [(0, 24)]             1.0
(7, 11)             [(9, 17)]             0.5

(7, 9)              [(9, 17)]             0.0
(17, 18)            [(9, 17)]             0.0

(0, 24)             [(0, 2), (20, 24)]    0.25
(5, 22)             []                    0.0
*/

function openHoursRatio(timeRange, openHours) {
    if(openHours.length === 0) return (0).toFixed(2)
    //Count the overlap between intervals
    let overlapTime = 0.0;
    //convert to minutes so it is a fair representation of the ratio
    const personStart = timeRange[0] * 60;
    const personEnd = timeRange[1] * 60;

    if(personEnd === personStart) return 0.0

    //count the overlap between intervals
    for (let i = 0; i < openHours.length; i++) {
        //convert to minutes so it is a fair representation of the ratio
        const businessStart = openHours[i][0] * 60;
        const businessEnd = openHours[i][1] * 60;
        //check overlaps
        //if not overlaps don't even consider, continue
        if(businessStart > personEnd || personStart > businessEnd) {
            continue;
        }
        //they are already overlapping, so choose the max of the start time
        const overlapStart = Math.max(personStart, businessStart);
        const overlapEnd = Math.min(personEnd, businessEnd);
        overlapTime += (overlapEnd - overlapStart);
    }
    
    return (overlapTime / (personEnd - personStart)).toFixed(2);
}

console.log(openHoursRatio([4,10], [[0, 24]]));
console.log(openHoursRatio([7,11], [[9, 17]]));
console.log(openHoursRatio([7,9], [[9, 17]]));
console.log(openHoursRatio([17,18], [[9, 17]]));
console.log(openHoursRatio([0,24], [[0, 2], [20, 24]]));
console.log(openHoursRatio([5, 22], []));
// console.log(openHoursRatio(timeRange, openHours));
// console.log(openHoursRatio(timeRange, openHours));
// console.log(openHoursRatio(timeRange, openHours));
// console.log(openHoursRatio(timeRange, openHours));