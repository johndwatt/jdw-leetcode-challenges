/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// naive approach
// var intersection = function(nums1, nums2) {
//     let result = [];
//     for (let i = 0; i < nums1.length; i++){
//         if (result.includes(nums1[i])) continue;
//         if (nums2.includes(nums1[i])){
//             result.push(nums1[i]);
//         } else {
//             continue;
//         }
//     }
//     return result;
// };

// use of sets
var intersection = function(nums1, nums2) {
    const compareSets = function(smallSet, largeSet){
        let result = [];
        for (let i = 0; i < smallSet.length; i++){
            if (largeSet.includes(smallSet[i])) result.push(smallSet[i]);
        }
        return result;
    }
    let set1 = [...new Set(nums1)]
    let set2 = [...new Set(nums2)]
    
    if (set1.length > set2.length){
        return compareSets(set2, set1);
    } else {
        return compareSets(set1, set2);
    }
};