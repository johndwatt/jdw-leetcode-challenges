/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let word = [];
    let arr = [];
    for (let i = s.length; i > -1; i--){
        if (s[i] === " "){
            arr.push(word.join(''));
            word = [];
        } else {
            word.push(s[i]);
        }
    }
    arr.push(word.join(''));
    return arr.reverse().join(" ");

};