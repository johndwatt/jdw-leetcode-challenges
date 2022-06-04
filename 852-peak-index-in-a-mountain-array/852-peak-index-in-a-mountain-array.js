/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i+1] < arr[i]) {
            return i
        }
    }
};