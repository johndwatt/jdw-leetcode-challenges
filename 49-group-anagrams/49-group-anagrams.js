/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (strs.length < 2) return [[...strs]];
    let result = [];
    let sorted = [];
    // Sort strings for easy checking
    for (let i = 0; i < strs.length; i++){
        sorted.push(strs[i].split("").sort().join(""));
    }
    // Check to see if they are anagrams, and push into hashtable
    let check = {};
    for (let i = 0; i < sorted.length; i++){
        if (sorted[i] in check) {
            check[sorted[i]].push(strs[i]);
        } else {
            check[sorted[i]] = [strs[i]];
        }
    }
    // Push resulting arrays of anagrams into return array
    for (let arr in check){
        result.push(check[arr]);
    }
    return result;
};