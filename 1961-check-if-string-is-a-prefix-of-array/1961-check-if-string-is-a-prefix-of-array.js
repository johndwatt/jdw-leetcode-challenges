/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */

// inefficient use of space
var isPrefixString = function(s, words) {
    if (s.length < words[0].length) return false;
    let word = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++){
        if (words[word] === undefined) return false;
        if (s[i] !== words[word][count]) return false;
        count++;
        if (words[word].length === count) {
            word++;
            count = 0;
        }
    }
    if (count !== 0) return false;
    return true;
};