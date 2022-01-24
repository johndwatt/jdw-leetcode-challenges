/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const first = "qwertyuiop";
    const second = "asdfghjkl";
    const third = "zxcvbnm";
    
    const rowOne = {};
    const rowTwo = {};
    const rowThree = {};
    
    for (let i = 0; i < first.length; i++){
        rowOne[first[i]] = i;
    }
    for (let i = 0; i < second.length; i++){
        rowTwo[second[i]] = i;
    }
    for (let i = 0; i < third.length; i++){
        rowThree[third[i]] = i;
    }
    
    let result = [];
    for (let i = 0; i < words.length; i++){
        let one = 0;
        let two = 0;
        let three = 0;
        for (let j = 0; j < words[i].length; j++){
            if (words[i][j].toLowerCase() in rowOne){
                one++;
            } else if (words[i][j].toLowerCase() in rowTwo){
                two++;
            } else if (words[i][j].toLowerCase() in rowThree){
                three++;
            }
        }
        if(one === words[i].length || two === words[i].length || three === words[i].length) {
            result.push(words[i]);
        }
    }
    return result;
};