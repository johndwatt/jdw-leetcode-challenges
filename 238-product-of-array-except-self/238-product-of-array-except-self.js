/**
 * @param {number[]} nums
 * @return {number[]}
 */

// with division and extra pointers, also O(2n)
var productExceptSelf = function(nums) {
    let result = [];
    let product = 1;
    let productNoZero = 1;
    let zeroCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            productNoZero = productNoZero * nums[i];
        } else {
            zeroCount += 1;
        }
        product = product * nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0 && zeroCount < 2) {
            result.push(productNoZero);
        } else if (nums[i] === 0 && zeroCount >= 2){
            result.push(0);
        } else {
            result.push(product / nums[i]);
        }
        
    }
    return result;
};