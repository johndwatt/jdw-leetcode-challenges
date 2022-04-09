class Solution:
    def findMiddleIndex(self, nums: List[int]) -> int:
        for i in range(len(nums)):
            left = reduce(lambda a, b: a + b, nums[:i], 0)
            right = reduce(lambda a, b: a + b, nums[i+1:], 0)
            if left == right:
                return i
        return -1