/**
 * @param {number[]} nums
 * @return {number}
 */
// not linear runtime
// var singleNumber = function(nums) {
//     nums.sort((a,b) => a - b);
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] !== nums[i+1]) {
//             return nums[i];
//         } else {
//             i++;
//         }
//     }
// };

var singleNumber = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++){
        result = result ^ nums[i];
    }
    return result;
};