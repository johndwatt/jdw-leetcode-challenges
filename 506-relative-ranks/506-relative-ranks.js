/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let answer = [];
    let saved = [...score];
    score.sort((a,b) => b - a);
    let hash = {};
    hash[score[0]] = "Gold Medal";
    hash[score[1]] = "Silver Medal";
    hash[score[2]] = "Bronze Medal";
    for (let i = 3; i < score.length; i++){
        hash[score[i]] = `${i + 1}`;
    }
    for (let i = 0; i < saved.length; i++){
        answer.push(hash[saved[i]]);
    }
    return answer;
};