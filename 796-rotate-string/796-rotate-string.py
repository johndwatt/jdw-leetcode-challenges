class Solution:
    def rotateString(self, s: str, goal: str) -> bool:
        if len(s) != len(goal):
            return False
        str = s + s
        if goal in str:
            return True
        return False