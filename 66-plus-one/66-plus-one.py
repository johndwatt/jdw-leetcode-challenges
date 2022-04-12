class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        s = ""
        for i in digits:
            s += str(i)
        plus_1 = str(int(s) + 1)
        return list(plus_1)
            