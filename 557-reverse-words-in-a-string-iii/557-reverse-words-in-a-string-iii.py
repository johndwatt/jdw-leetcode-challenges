class Solution:
    def reverseWords(self, s: str) -> str:
        word = []
        result = []
        for i in range(len(s) - 1, -1, -1):
            if s[i] == " ":
                result.append("".join(word))
                word = []
            else:
                word.append(s[i])
        result.append("".join(word))
        result.reverse()
        result = " ".join(result)
        return result