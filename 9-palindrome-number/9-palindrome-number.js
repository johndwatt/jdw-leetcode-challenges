/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xStr = x.toString();
    let test = xStr.split("").reverse().join("");
    if (test === xStr) return true;
    return false;
}