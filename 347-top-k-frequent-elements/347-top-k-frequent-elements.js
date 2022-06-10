/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Inefficient
// var topKFrequent = function(nums, k) {
//     const counts = {};
//     const result = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] in counts) {
//             counts[nums[i]] += 1;
//         } else {
//             counts[nums[i]] = 1;
//         }
//     }
//     let values = Object.values(counts).sort((a,b) => b - a);
//     for (let i = 0; i < k; i++){
//         result.push(Object.keys(counts).find(key => counts[key] === values[i]));
//         counts[result[i]] = 0;
//     }
//     return result;
// };

var topKFrequent = function(nums, k) {
    let counts = new Map();
    let result = [];
    // DANGER: will not work with .fill([]) because all elements will reference the same array, must use map
    let frequency = new Array(nums.length + 1).fill().map(x => ([]));
    // Set values of nums to map, where key is number and value is count of that number
    for (let n of nums){
        if (counts.has(n)) {
            counts.set(n, counts.get(n) + 1);
        } else {
            counts.set(n, 1);
        }
    }
    // Push numbers to correct buckets (count is bucket index, number gets pushed)
    for (let [key, value] of counts) {
        frequency[value].push(key);
    }
    // Start from back of frequency array (bcuz highest counts stored in index) and push k values into return array
    for (let i = frequency.length - 1; i >= 0; i--) {
        for (let n of frequency[i]) {
            result.push(n);
            if (result.length === k) {
                return result;
            }
        }
    }
};

