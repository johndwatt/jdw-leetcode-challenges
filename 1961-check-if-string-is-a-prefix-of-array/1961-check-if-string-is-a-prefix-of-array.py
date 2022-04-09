class Solution:
    def isPrefixString(self, s: str, words: List[str]) -> bool:
        answer = ""
        for i in words:
            answer += i
            if answer == s:
                return True
            if len(answer) > len(s):
                return False
        return False