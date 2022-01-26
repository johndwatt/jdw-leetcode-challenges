/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMaxConsecutiveOnes = function(nums) {
//     let arr = [];
//     let count = 0;
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] === 1){
//             count++
//         } else {
//             arr.push(count);
//             count = 0;
//         }
//         arr.push(count);
//     }
//     arr.sort((a,b) => b - a);
//     return arr[0];
// };

//more efficient
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 1){
            count++ 
            if (max < count) max = count;
        } else {
            count = 0;
        }
    }
    return max;
};