class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        # replace punctuation with spaces and make all letters lower case
        normalized_s = "".join([c.lower() if c.isalnum() else " " for c in paragraph])
        # split string into words
        words = normalized_s.split()
        # create dictionary
        word_counts = defaultdict(int)
        # create set of banned words
        banned_words = set(banned)
        # count appearance of words and exclude banned words
        for word in words:
            if word not in banned_words:
                word_counts[word] += 1
        # return highest frequency word
        return max(word_counts.items(), key=lambda x: x[1])[0]