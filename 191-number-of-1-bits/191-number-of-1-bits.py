class Solution:
    def hammingWeight(self, n: int) -> int:
        # format number as string - 32 is how many places the binary string is saved to
        s = format(n, "032b")
        count = 0
        for i in s:
            if i == "1":
                count += 1
        return count