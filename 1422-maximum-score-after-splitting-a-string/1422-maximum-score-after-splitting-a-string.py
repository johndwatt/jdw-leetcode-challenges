class Solution:
    def maxScore(self, s: str) -> int:
        length = len(s)
        scores = []
        # check if str consists of only 0s or 1s
        if s.count("0") == length or s.count("1") == length:
            return length - 1
        # loop through list and get scores by getting sum of counts
        for i in range(1, length):
            left = s[:i]
            right = s[i:]
            scores.append(left.count("0") + right.count("1"))
        return max(scores)
        
        