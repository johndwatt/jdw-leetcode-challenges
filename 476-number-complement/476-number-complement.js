/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let binaryNum = (num >>> 0).toString(2);
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