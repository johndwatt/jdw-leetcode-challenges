class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        set_sum = sum(set(nums))
        return [sum(nums) - set_sum, int(len(nums) * (len(nums) + 1 ) / 2) - set_sum]