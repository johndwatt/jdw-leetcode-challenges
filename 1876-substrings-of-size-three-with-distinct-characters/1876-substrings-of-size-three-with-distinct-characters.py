class Solution(object):
    def countGoodSubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """
        result = 0
        for i in range(len(s) - 2):
            char_1 = s[i]
            char_2 = s[i + 1]
            char_3 = s[i + 2]
            if char_1 == char_2 or char_2 == char_3 or char_1 == char_3:
                continue
            result += 1
        return result