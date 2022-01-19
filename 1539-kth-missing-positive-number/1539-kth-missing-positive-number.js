/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let map = {}
    for (let i = 0; i < arr.length; i++){
        map[arr[i]] = i;
    }
    let count = 1;
    let result = 0;
    while (count <= arr.length + k) {
        if (count in map === false ) result++;
        if (result === k) return count;
        count++;
        
    }
};