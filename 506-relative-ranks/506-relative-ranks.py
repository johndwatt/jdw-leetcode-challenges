class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        sorted_score = sorted(list(range(len(score))), key = lambda n: -score[n])
        for i, num in enumerate(sorted_score):
            if i == 0: score[num] = "Gold Medal"
            elif i == 1: score[num] = "Silver Medal"
            elif i == 2: score[num] = "Bronze Medal"
            else: score[num] = str(i+1)
        return score