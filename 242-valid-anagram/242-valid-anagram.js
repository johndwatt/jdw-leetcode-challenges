/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//     if (s.length !== t.length) return false;
//     let obj = {};
//     for (let i = 0; i < s.length; i++){
//         if (s[i] in obj === true){
//             obj[s[i]] += 1;
//         } else {
//             obj[s[i]] = 1;
//         }
//     }
//     const compObj = {...obj}
//     for (let i = 0; i < t.length; i++){
//         if (t[i] in obj === true){
//             compObj[t[i]] += 1;
//             if (compObj[t[i]] > obj[t[i]] * 2) return false;
//         } else {
//             return false;
//         }
//     }
//     return true;
// };

// cleaner, more readable approach, and more efficient
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const obj1 = {};
    const obj2 = {};
    for (let i = 0; i < s.length; i++){
        if (s[i] in obj1 === true){
            obj1[s[i]] += 1;
        } else {
            obj1[s[i]] = 1;
        }
        if (t[i] in obj2 === true){
            obj2[t[i]] += 1;
        } else {
            obj2[t[i]] = 1;
        }
    }
    for (let letter in obj1) {
        if (obj1[letter] === obj2[letter]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};

// sorting solution oneliner
// var isAnagram = function(s, t) {
//     return s.split("").sort().join("") === t.split("").sort().join("")
// }