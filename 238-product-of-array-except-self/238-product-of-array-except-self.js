/**
 * @param {number[]} nums
 * @return {number[]}
 */

// with division and extra pointers, also O(2n) = time: > 63.04%, space: > 42.98%
// var productExceptSelf = function(nums) {
//     let result = [];
//     let product = 1;
//     let productNoZero = 1;
//     let zeroCount = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             productNoZero = productNoZero * nums[i];
//         } else {
//             zeroCount += 1;
//         }
//         product = product * nums[i];
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0 && zeroCount < 2) {
//             result.push(productNoZero);
//         } else if (nums[i] === 0 && zeroCount >= 2){
//             result.push(0);
//         } else {
//             result.push(product / nums[i]);
//         }
//     }
//     return result;
// };

// Without Division - calculate prefix values on first loop, then multiply those values by the postfix values on second loop
// Time: O(n), Space: O(1) (output array doesn't count)
var productExceptSelf = function(nums) {
    let answer = new Array(nums.length);
    let prefix = 1;
    let postfix = 1;
    for (let i = 0; i < nums.length; i++) {
        answer[i] = prefix;
        prefix *= nums[i];
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= postfix;
        postfix *= nums[i]
    }
    return answer;
};