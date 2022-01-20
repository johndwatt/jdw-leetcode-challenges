/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let nums = s.replace(/\D/g, "").split("");
    if (nums.length === 0) return -1;
    let sortedNums = nums.sort((a,b) => b - a);   
    for (let i = 1; i < sortedNums.length; i++){
        if (sortedNums[i] !== sortedNums[0]) {
            return sortedNums[i];
        }
    }
    return -1;
};  