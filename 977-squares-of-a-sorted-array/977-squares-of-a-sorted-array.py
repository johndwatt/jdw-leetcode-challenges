class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        result = []
        for i in nums:
            square = i * i
            result.append(square)
        return sorted(result)