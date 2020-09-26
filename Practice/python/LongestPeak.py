# O(n) time | O(1) space
def longestPeak(array):
    longestPeak = 0
    i = 1 # we need to start from 1 since the first element 0 is clearly not a peak
    while i < len(array) - 1:
        isPeak = (array[i] > array[i+1] and array[i] > array[i-1])
        if (not isPeak):
            # move to the next element
            i += 1
            continue
        # if it is a peak, expand outwards from this peak, all elements have to strictly DECREASE

        leftIndex = i-2 # start from i - 2 -> so we compare it with the one behind it
        # loop while, we don't go out of bounds AND
        # going left the element on the left is less than the element to the right
        while(leftIndex >= 0 and array[leftIndex] < array[leftIndex + 1]):
            leftIndex = leftIndex - 1 #go left

        rightIndex = i+2 # start from i + 2 -> so we compare it with the one behind it
        # loop while, we don't go out of bounds AND
        # going right the element to the right is ALSO less than the element on the left
        while(rightIndex < len(array) and array[rightIndex] < array[rightIndex - 1]):
            rightIndex = rightIndex + 1 #go right

        currentPeakLength = rightIndex - leftIndex - 1
        longestPeak = max(currentPeakLength, longestPeak)
        # next longest peak can only start from the last rightIndex we touched
        i = rightIndex
    
    return longestPeak

        
