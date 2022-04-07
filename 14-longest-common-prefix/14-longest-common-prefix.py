class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs) == 0: return ""
        for i in range(len(strs[0])):
            # char is set to iterative letter of first string
            char = strs[0][i]
            for j in range(len(strs)):
                # if iterator equals length of current string or if current letter does not equal char 
                # return prefix up to this point
                if i == len(strs[j]) or strs[j][i] != char:
                    return strs[0][:i]
        return strs[0]
        