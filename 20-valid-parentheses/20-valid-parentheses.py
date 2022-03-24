class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = []
        map = {"(": ")", "[": "]", "{": "}" }
        for i in range(len(s)):
            if s[i] in map:
                stack.append(s[i])
            else:
                if not stack or map[stack.pop()] != s[i]:
                    return False
        return not stack