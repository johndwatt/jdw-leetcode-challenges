class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        # naive solution
        # for i in nums:
        #     if nums.count(i) == 1:
        #         return i
        
        # better solution: XOR operator
        result = 0
        for num in nums:
            result = result ^ num
        return result