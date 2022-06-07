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

// efficient two pass solution:
// var twoSum = function (nums, target) {
//     let obj = {};
//     for (let i = 0; i < nums.length; i++) {
//         obj[nums[i]] = i;
//     }    
//     for (let i = 0; i < nums.length; i++) {
//         let comp = target - nums[i];
//         if (`${comp}` in obj && obj[comp] !== i) {
//             return [i, obj[comp]];
//         }
//     }
// };
//time complexity: linear, space complexity: linear

//most efficient one pass solution:
var twoSum = function (nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in obj) {
            return [obj[target - nums[i]], i]
        } else {
            obj[nums[i]] = i; 
        }
    }
};
//time complexity: linear, space complexity: linear

