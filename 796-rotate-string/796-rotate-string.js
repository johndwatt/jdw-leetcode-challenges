/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

//inefficient
// var rotateString = function(s, goal) {
//     let splitStr = s.split("");
//     for (let i = 0; i < s.length; i++){
//         if (splitStr.join("") === goal) return true;
//         splitStr.push(s[i]);
//         splitStr.shift();
//     }
//     return false;
// };

//efficient 
var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false;
    let str = s+s;
    if (str.includes(goal)) return true;
    return false;
};