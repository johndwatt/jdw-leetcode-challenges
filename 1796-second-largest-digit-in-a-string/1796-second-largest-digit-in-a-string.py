class Solution:
    def secondHighest(self, s: str) -> int:
        # return set of numbers only
        nums = set(re.sub('[^\d]', '', s))
        # if nums is empty, return -1
        if len(nums) == 0:
            return -1
        # if only one number, return -1
        if len(nums) == 1:
            return -1
        else: 
            # remove highest value
            nums.remove(max(nums))
            # return second highest value
            return max(nums)