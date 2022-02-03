/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            count++;
            stack.push(s[i]);
        } else {
            const test = stack.pop();
            if (s[i] === ")" && test !== "(") return false;
            if (s[i] === "}" && test !== "{") return false;
            if (s[i] === "]" && test !== "[") return false;
            count--;
        }
    }
    return !count;
};