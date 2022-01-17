/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let obj = {};
    for (let i = 0; i < s.length; i++){
        if (s[i] in obj === true){
            obj[s[i]] += 1;
        } else {
            obj[s[i]] = 1;
        }
    }
    const compObj = {...obj}
    for (let i = 0; i < t.length; i++){
        if (t[i] in obj === true){
            compObj[t[i]] += 1;
            if (compObj[t[i]] > obj[t[i]] * 2) return false;
        } else {
            return false;
        }
    }
    return true;
};