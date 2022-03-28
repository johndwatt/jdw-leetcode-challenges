/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // check if nums is empty array
    if (nums.length === 0) return 0;
    // start off with current max as largest number in array
    let currentMax = Math.max(...nums);
    // start off with sum at 0
    let currentSum = 0;
    // loop through nums
    for (let i = 0; i < nums.length; i++) {
        // check if adding current index makes sum negative; 
        if (currentSum + nums[i] < 0) {
            // if so, set back to 0
            currentSum = 0;
        } else {
            // set current sum to sum + current index
            currentSum += nums[i];
            // check if current sum is greater than current max and set current max
            currentMax = Math.max(currentMax, currentSum);
        }
    }
    return currentMax;
};

// Great explanation in discussion:
/* 
What helped me was to think about the extreme cases. Imagine if nums was all positive integers. If that was the case, our answer would just be the sum of every number in the array, right? Every subsequent number would make the total greater. And what if nums was all negative integers? In that case, our answer would just be the value of the least negative item in the array, since adding it with any other number in the array would by definition make it smaller.

One other key idea: what would happen if we had a subarray that started with a negative number, like [-2, 4, -1, 2, 1]? Well, if we removed that negative number to make a shorter subarray (i.e. [4, -1, 2, 1]), that new subarray would have to have a greater value! And in fact, this applies to any sequence at the start of our subarray that results in a negative number: we can remove the whole sequence and make the remaining items sum to a greater value, like so: [-2, 1, -3, 4, -1, 2, 1] => [4, -1, 2, 1] (removed [-2, 1, -3]).

Now we have the tools we need to understand the solution above. We start by keeping track of two variables: the highest subarray sum we've seen so far (result, which we start at the smallest safe integer) and the sum of the current subarray (sum, which we start at 0). Then we start iterating through the array.

We add the number at index i to sum. Then we check: is this greater than our current result? If it is, we set result to be equal to sum (For the first item, the answer to this will always be yes).

The next line (sum = sum < 0 ? 0 : sum) is the trickiest to figure out, but it's related to our insight above about negative sequences at the start of our subarray. If sum is less than 0 (or is negative, in other words), then we know we can exclude it from the sum of the subsequent numbers, so we can "reset" sum to 0 and start over on the next iteration. Otherwise, if sum is positive or 0 we leave it alone. By going through every item in the array this way, we can record the greatest subarray sum in the array and return it after the loop is done.

-ac3charland
*/