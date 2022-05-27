class Solution:
    def sumEvenAfterQueries(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        evenSum = sum(x for x in nums if x % 2 == 0)
        result = []
        for val, i in queries:
            if nums[i] % 2 == 0:
                evenSum -= nums[i]
            nums[i] += val
            if nums[i] % 2 == 0:
                evenSum += nums[i]
            result.append(evenSum)
        return result