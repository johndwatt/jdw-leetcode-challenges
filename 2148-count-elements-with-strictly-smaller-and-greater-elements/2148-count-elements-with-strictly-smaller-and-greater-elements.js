/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    let result = 0;
    nums.sort((a,b) => b - a);
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] < nums[0] && nums[i] > nums[nums.length - 1]){
            result++;
        }
    }
    return result;
};