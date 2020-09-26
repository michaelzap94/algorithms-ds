def powerset(array):
    result = [[]]
    for element in array:
        #for subsetElement in result:
		#cannot do this, since this loops through the array,
		#and since we are increasing the size of it by adding new elements, it will keep looping for ever
		#therfore do:
        for subsetIndex in range(len(result)):
            arrToBeAdded = result[subsetIndex] + [element]
            result.append(arrToBeAdded)

    return result
    
