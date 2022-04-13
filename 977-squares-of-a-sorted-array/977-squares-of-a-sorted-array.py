class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        result = []
        for i in nums:
            square = i * i
            result.append(square)
        return sorted(result)
    
    # sorted() returns a new list from the original list while sort() modifies the existing list