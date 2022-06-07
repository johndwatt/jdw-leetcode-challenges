/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     let map = {};
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] in map) {
//             return true;
//         } else {
//             map[nums[i]] = nums[i];
//         }
//     }
//     return false;
// };

// more efficient?  time: yes, space: no
// var containsDuplicate = function(nums) {
//     const set = [...new Set(nums)];
//     if (set.length === nums.length) {
//         return false;
//     } else {
//         return true;
//     }
// };

// one liner
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length
};