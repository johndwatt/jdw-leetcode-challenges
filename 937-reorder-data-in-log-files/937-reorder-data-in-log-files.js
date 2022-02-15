/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let letters = [];
    let digits = [];

    // separate letter-logs from digit logs and maintain identifier order
    for (let i = 0; i < logs.length; i++){
        // grabs contents w/o identifiers
        const contents = logs[i].slice(logs[i].indexOf(" ") + 1);
        // if section contains letters, push to letters; else push to digits
        if (contents.slice(0, 1).match(/[a-z]/i)) {
            letters.push(logs[i]);
        } else {
            digits.push(logs[i]);
        }
    }
    
    // sort letters by contents or identifiers
    const result = letters.sort((a,b) => {
        // split identfier from content
        const identifierA = a.split(" ", 1);
        const identifierB = b.split(" ", 1);
        const contentA = a.split(/^[^\s]*\s/);
        const contentB = b.split(/^[^\s]*\s/);
        // compare and sort
        if (contentA[1] !== contentB[1]) {
            return contentA[1].localeCompare(contentB[1]);
        } else {
            return identifierA[0].localeCompare(identifierB[0]);
        }
    });
    
    // append digits (maintain relative order)
    result.push(...digits);
    return result;
};