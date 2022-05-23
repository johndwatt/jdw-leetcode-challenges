/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        let test = nums[i].toString().length;
        if (test % 2 === 0) counter++; 
    }
    return counter;
};