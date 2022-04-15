class Solution:
    def checkString(self, s: str) -> bool:
        if not "a" in s or not "b" in s: return True
        passed_b = False
        for i in range(len(s)):
            if s[i] == "a" and passed_b == True:
                return False
            elif s[i] == "b":
                passed_b = True
        return True
                
                