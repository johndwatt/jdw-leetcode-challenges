class Solution:
    # def twoSum(self, nums: List[int], target: int) -> List[int]:
    #     map = {}
    #     for i in range(len(nums)):
    #         map[nums[i]] = i
    #     for i in range(len(nums)):
    #         comp = target - nums[i]
    #         if comp in map and map[comp] != i:
    #             return [i, map[comp]]
    
    
    # one pass solution
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}
        for i in range(len(nums)):
            if target - nums[i] in map:
                return [map[target - nums[i]], i]
            else:
                map[nums[i]] = i