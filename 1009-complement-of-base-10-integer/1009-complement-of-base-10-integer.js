/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
        let binaryNum = (n >>> 0).toString(2);
    let result = [];
    for (let i = 0; i < binaryNum.length; i++){
        if (binaryNum[i] == 1) {
            result.push(0);
        } else {
            result.push(1);
        }
    }
    return parseInt(result.join(''), 2);
};