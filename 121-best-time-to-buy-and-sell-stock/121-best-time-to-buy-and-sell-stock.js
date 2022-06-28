/**
 * @param {number[]} prices
 * @return {number}
 */

// Inefficient O(n^2) solution - brute force, naive approach
// var maxProfit = function(prices) {
//     let max = 0;
//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             if (prices[i] < prices[j]) {
//                 max = Math.max(max, prices[j] - prices[i]);
//             }
//         }
//     }
//     return max;
// };

// Better sliding window approach: O(n) time
var maxProfit = function(prices) {
    let [buy, sell, max] = [0, 1, 0];
    while (sell < prices.length) {
        if (prices[buy] < prices[sell]) {
            max = Math.max(max, prices[sell] - prices[buy]);
        } else {
            buy = sell;
        }
        sell++;
    }
    return max;
};