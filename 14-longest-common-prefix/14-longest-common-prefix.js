/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0].charAt(i);
        for (let j = 0; j < strs.length; j++) {
            if (i === strs[j].length || strs[j].charAt(i) !== char) {
                return strs[0].slice(0, i);
            }
        }
    }
    return strs[0];
};