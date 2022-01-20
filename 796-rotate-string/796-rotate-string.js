/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let splitStr = s.split("");
    for (let i = 0; i < s.length; i++){
        if (splitStr.join("") === goal) return true;
        splitStr.push(s[i]);
        splitStr.shift();
    }
    return false;
};