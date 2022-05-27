/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
const addEvenNums = function (arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

var sumEvenAfterQueries = function(nums, queries) {
    let result = [];
    for (let i = 0; i < queries.length; i++){
        nums[queries[i][1]] = nums[queries[i][1]] + queries[i][0]
        result.push(addEvenNums(nums))
    }
    return result;
};