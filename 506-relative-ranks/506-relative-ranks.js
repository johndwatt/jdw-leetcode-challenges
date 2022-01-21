/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let answer = [];
    let saved = [...score];
    let sorted = score.sort((a,b) => b - a);
    let hash = {};
    hash[sorted[0]] = "Gold Medal";
    hash[sorted[1]] = "Silver Medal";
    hash[sorted[2]] = "Bronze Medal";
    for (let i = 3; i < sorted.length; i++){
        hash[sorted[i]] = `${i + 1}`;
    }
    for (let i = 0; i < saved.length; i++){
        answer.push(hash[saved[i]]);
    }
    return answer;
};