/**
 * @param {string} s
 * @return {string}
 */
// NOT WORKING pointer solution
// var reverseOnlyLetters = function(s) {
//     let j = s.length - 1;
//     let testLetter = /^[a-z]+$/i;
//     let result = [];
//     for (let i = 0; i < s.length; i++) {
//         console.log('ROUND', i)
//         if (testLetter.test(s[i])) {
//             console.log("hit if")
//             if (testLetter.test(s[j])) {
//                 console.log("hit if j", testLetter.test(s[j]))
//                 while (!testLetter.test(s[j])) {
//                     j--;
//                 }
//             }
//             result.push(s[j]);
//             j--;
//         } else {
//             console.log("hit else")
//             result.push(s[i]);
//             j--;
//         }
//         console.log(result, j, i)
//     }
//     return result.join("");
// };

// Stack solution
var reverseOnlyLetters = function(s) {
    let stack = []
    let result = []
    let testLetter = /^[a-z]+$/i;
    for (let i = 0; i < s.length; i++) {
        if (testLetter.test(s[i])) {
            stack.push(s[i]);
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (testLetter.test(s[i])) {
            result.push(stack.pop());
        } else {
            result.push(s[i]);
        }
    }
    return result.join("");
};