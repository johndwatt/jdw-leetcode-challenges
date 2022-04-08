class Solution:
    def modifyString(self, s: str) -> str:
        if not "?" in s: return s
        for i, char in enumerate(s):
            if char == "?":
                prev_char = s[i - 1] if i > 0 else ""
                next_char = s[i + 1] if i < len(s) - 1 else ""
                if prev_char != "a" and next_char != "a":
                    s = s[:i] + "a" + s[i + 1:]
                elif prev_char != "b" and next_char != "b":
                    s = s[:i] + "b" + s[i + 1:]
                else:
                    s = s[:i] + "c" + s[i + 1:]
        return s