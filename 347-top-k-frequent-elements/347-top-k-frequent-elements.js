/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const counts = {};
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in counts) {
            counts[nums[i]] += 1;
        } else {
            counts[nums[i]] = 1;
        }
    }
    let values = Object.values(counts).sort((a,b) => b - a);
    for (let i = 0; i < k; i++){
        result.push(Object.keys(counts).find(key => counts[key] === values[i]));
        counts[result[i]] = 0;
    }
    return result;
};