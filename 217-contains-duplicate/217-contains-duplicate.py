class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        obj = {}
        for i in range(len(nums)):
            if nums[i] in obj:
                return True
            else:
                obj[nums[i]] = 1
        return False