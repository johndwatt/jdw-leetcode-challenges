class Solution:
    def countElements(self, nums: List[int]) -> int:
        result = 0
        for i in nums:
            if i != max(nums) and i != min(nums):
                result += 1
        return result