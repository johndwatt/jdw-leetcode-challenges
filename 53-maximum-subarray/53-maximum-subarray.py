class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        current_max = max(nums)
        current_sum = 0
        for i in range(len(nums)):
            if current_sum + nums[i] < 0:
                current_sum = 0
            else:
                current_sum = current_sum + nums[i]
                current_max = max(current_max, current_sum)
        return current_max