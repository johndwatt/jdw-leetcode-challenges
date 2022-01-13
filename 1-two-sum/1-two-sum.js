/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// working inefficient solution:
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (i !== j) {
//                 let test = nums[i] + nums[j];
//                 if (test === target) {
//                     return [i, j];
//                 }
//             } else {
//                 continue;
//             }
//         }
//     }
// };
// time complexity: quadratic, space complexity: constant

//efficient solution:
var twoSum = function (nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        let comp = target - nums[i];
        if (`${comp}` in obj && obj[comp] !== i) {
            return [i, obj[comp]];
        }
    }
};
//time complexity: linear, space complexity: linear