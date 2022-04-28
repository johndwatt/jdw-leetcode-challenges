class Solution:
    def mostFrequent(self, nums: List[int], key: int) -> int:
        targets = {}
        for i in range(1, len(nums)):
            if nums[i-1] == key:
                if nums[i] in targets:
                    targets[nums[i]] += 1
                else:
                    targets[nums[i]] = 1
            print(targets)
        result = max(targets, key=targets.get)
        return result