/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let modified = false
    let prev = -Infinity
    for (let i = 0; i < nums.length -1; i++){
        if (nums[i] > nums[i+1]){
            if (modified) return false
            if (prev <= nums[i+1]) {
                nums[i] = nums[i+1]
            } else {
                nums[i+1] = nums[i]
            }
            modified = true
        }
        prev = nums[i]
    }
    return true
};    