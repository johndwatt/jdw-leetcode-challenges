/**
 * @param {number[]} arr
 * @return {number}
 */
// O(n) solution
// var peakIndexInMountainArray = function(arr) {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i+1] < arr[i]) {
//             return i;
//         }
//     }
// };

// O(log n) solution
var peakIndexInMountainArray = function(arr) {
    let low = 0;
    let high = arr.length - 1;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] < arr[mid+1]) {
            low = mid + 1
        } else {
            high = mid
        }
    }
    return low
};