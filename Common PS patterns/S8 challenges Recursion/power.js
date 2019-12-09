//Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. 
//This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.

//Assumptions: No negative bases or exponents, not nulls
function power(base, pow){
    if(pow === 0) return 1;
    return base * power(base,pow-1);
}
//if power(2,2) -> 2 * power(2,1) -> 2 * (2 * power(2,0)) -> 2 * (2 * (return 1)) -> 4 


//TESTS
console.log(power(2,0)) // 1
console.log(power(2,2)) // 4
console.log(power(2,4)) // 16