class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        nums = [i for i in range(1, 10)]
        result = []
        self.dfs(result, nums, k, [], n)
        return result
        
    def dfs(self, result, nums, combos, path, target):
        if len(path) == combos:
            if target == 0:
                result.append(path)
        for i in range(len(nums)):
            if nums[i] > target:
                continue
            self.dfs(result, nums[i+1:], combos, path+[nums[i]], target - nums[i])