/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Remove all non-alphabetical chars and make lower case
    let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    // Compare back half of the string to front half
    let j = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[j]) return false;
        j--;
    }
    return true;
};