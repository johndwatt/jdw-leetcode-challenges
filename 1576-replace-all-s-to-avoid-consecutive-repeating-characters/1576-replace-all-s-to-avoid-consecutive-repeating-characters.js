/**
 * @param {string} s
 * @return {string}
 */

// inefficient
// var modifyString = function(s) {
//     if (s.includes('?') === false) return s;
//     const letters = "abcdefghijklmnopqrstuvwxyz";
//     for (let i = 0; i < s.length; i++){
//         let counter = 0;
//         if (s[i] === "?") {
//             if (s[i+1] === letters[counter] || s[i-1] === letters[counter]) {
//                 while (s[i+1] === letters[counter] || s[i-1] === letters[counter]) {
//                     counter++;
//                 }
//                 s = s.substring(0, i) + letters[counter] + s.substring(i+1);
//             } else {
//                 s = s.substring(0, i) + letters[counter] + s.substring(i+1);
//             }
//         }
//     }
//     return s;
// };

// more efficient
var modifyString = function(s) {
    if (s.includes('?') === false) return s;
    for (let i = 0; i < s.length; i++){
        if (s[i] === "?") {
            if (s[i+1] !== "a" && s[i-1] !== "a") {
                s = s.slice(0, i) + "a" + s.slice(i+1);
            } else if (s[i+1] !== "b" && s[i-1] !== "b"){
                s = s.slice(0, i) + "b" + s.slice(i+1);
            } else {
                s = s.slice(0, i) + "c" + s.slice(i+1);
            }
        }
    }
    return s;
};