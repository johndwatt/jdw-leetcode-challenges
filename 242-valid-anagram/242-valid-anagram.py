class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): 
            return False
        a = {}
        b = {}
        for i, char in enumerate(s):
            if char in a:
                a[char] += 1
            else:
                a[char] = 1
        for i, char in enumerate(t):
            if char in b:
                b[char] += 1
            else:
                b[char] = 1
        return a == b