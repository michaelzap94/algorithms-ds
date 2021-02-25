//O(nd) time | O(n) space
function numberOfWaysToMakeChange(n, denoms) {
    //first init a bucket with n+1 items
    const ways = new Array(n+1).fill(0);//and fill it with zeros
    //base case
    ways[0] = 1;
    
    for (const denom of denoms) {
        //we start looping from 1
        for (let ammount = 1; ammount < n + 1; ammount++) {
            //if the denom can make this ammount is because it is equal or smaller
            if(denom <= ammount) {
                //update the current ammount with the number of ways it can make changes.
                //e.g:denom 1 -> ways[1] = ways[1] + ways[1-1] -> ways[1] + ways[0] -> 0 + 1 = 1
                //e.g:denom 1 -> ways[2] = ways[2] + ways[2-1] -> ways[1] + ways[1] -> 0 + 1 = 1
                //e.g:denom 1 -> ways[3] = ways[3] + ways[3-1] -> ways[1] + ways[2] -> 0 + 1 = 1
                //....... fill with 1 the array of ways, as we can use 1 to make changes for any quantity....
                //e.g:denom 1 -> ways[5] = ways[5] + ways[5-1] -> ways[5] + ways[4] -> 0 + 1 = 1

                //e.g:denom 5 -> ways[5] = ways[5] + ways[5-5] -> ways[5] + ways[0] -> 1 + 1 = 2
                ways[ammount] = ways[ammount] + ways[ammount - denom];
            }
        }
    }
    return ways[n];
}