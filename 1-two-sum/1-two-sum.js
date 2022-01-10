/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// working inefficient solution:
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                let test = nums[i] + nums[j];
                if (test === target) {
                    return [i, j];
                }
            } else {
                continue;
            }
        }
    }
};
