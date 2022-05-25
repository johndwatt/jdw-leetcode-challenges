class Solution:
    def countPairs(self, nums: List[int], k: int) -> int:
        if len(nums) < 2: return 0
        count = 0
        for i in range(0, len(nums) - 1):
            for j in range(i + 1, len(nums)):
                if nums[i] == nums[j] and (i * j) % k == 0:
                    count += 1
        return count