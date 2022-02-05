/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // If num is a single digit, return num - base case
    if (String(+num).charAt(0) == num) return num;
    // Create array of nums
    let arr = Array.from(num.toString()).map(Number);
    // Add nums together
    const result = arr.reduce((a,b) => a + b)
    // recursive call with new value
    return addDigits(result);
};