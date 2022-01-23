/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let wordsArr = s.split(" ");
    if (wordsArr.includes("") === true) {
        let filtered = wordsArr.filter( item =>
            item !== ""
        );
        return filtered[filtered.length - 1].length;
    }
    return wordsArr[wordsArr.length - 1].length;
};