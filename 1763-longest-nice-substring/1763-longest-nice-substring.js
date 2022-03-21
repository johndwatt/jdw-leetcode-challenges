/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    // Recursive strategy
    function findLongestSubstring(x){
        if (s.length < 2) return "";
        let compareSet = new Set();
        for (let i = 0; i < x.length; i++){
            compareSet.add(x[i]);
        }
        for (let i = 0; i < x.length; i++){
            if (!compareSet.has(x[i].toLowerCase()) || !compareSet.has(x[i].toUpperCase())){
                let s1 = findLongestSubstring(x.slice(0, i));
                let s2 = findLongestSubstring(x.slice(i + 1, x.length));
                if (s2.length > s1.length){
                    return s2;
                } else {
                    return s1;
                }
            }
        }
        return x;
    }
    return findLongestSubstring(s);
};