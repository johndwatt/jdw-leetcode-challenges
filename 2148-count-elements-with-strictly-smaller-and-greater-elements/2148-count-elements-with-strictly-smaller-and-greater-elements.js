/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    let result = 0;
    nums.sort((a,b) => b - a);
    let map = {}
    map.largest = nums[0];
    map.smallest = nums[nums.length - 1]
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] < map.largest && nums[i] > map.smallest){
            result++;
        }
    }
    return result;
};