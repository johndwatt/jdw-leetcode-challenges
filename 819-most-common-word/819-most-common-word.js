/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const modParagraph = paragraph.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, " ")
        .toLowerCase()
        .split(" ");
    let map = {};
    for (let i = 0; i < modParagraph.length; i++){
        if (banned.includes(modParagraph[i]) || modParagraph[i] === ""){
            continue;
        } else if (modParagraph[i] in map){
            map[modParagraph[i]] += 1;
        } else {
            map[modParagraph[i]] = 1;
        }
    }
    let result = "";
    let max = 0;
    for (let word in map){
        if (map[word] > max){
            max = map[word];
            result = word;
        }
    }
    return result;
};