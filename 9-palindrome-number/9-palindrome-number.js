/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let xStr = x.toString();
    let j = xStr.length - 1;
    for (let i = 0; i < xStr.length / 2; i++){
        if (xStr[i] !== xStr[j]) return false;
        j--;
    }
    return true;
}