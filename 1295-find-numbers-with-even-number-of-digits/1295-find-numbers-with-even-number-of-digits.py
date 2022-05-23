class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        counter = 0
        for i in range(len(nums)):
            test = len(str(nums[i]))
            if test % 2 == 0:
                counter += 1
        return counter