class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        # Python split method w/o args will remove all whitespace
        split = s.split()
        return len(split[-1])