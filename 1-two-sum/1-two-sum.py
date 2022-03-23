class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        map = {}
        for i in range(len(nums)):
            map[nums[i]] = i
        for i in range(len(nums)):
            comp = target - nums[i]
            if comp in map and map[comp] != i:
                return [i, map[comp]]