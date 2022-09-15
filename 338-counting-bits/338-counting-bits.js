/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    if (n === 0) return [0];
    let answer = [0];
    for (let i = 1; i <= n; i++) {
        answer.push(hammingWeight(i));
    }
    return answer;
};

var hammingWeight = function(n) {
    const str = n.toString(2);
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "1") count++;
    }
    return count;
};