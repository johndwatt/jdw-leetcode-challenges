/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanObj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        result += romanObj[s[i]];
        let test = s[i+1];
        if (s[i] === "I" && (test === "V" || test === "X")) {
            result -= 2;
        } else if (s[i] === "X" && (test === "L" || test === "C")) {
            result -= 20;
        } else if (s[i] === "C" && (test === "D" || test === "M")) {
            result -= 200;
        } else {
            continue;
        }
    }
    return result;
};