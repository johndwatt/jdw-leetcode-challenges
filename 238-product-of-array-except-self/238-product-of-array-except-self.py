class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # creating a fixed array is more efficient because the array does not need to dynamically change size?
        answer = [1] * (len(nums));
        prefix = 1;
        for i in range(len(nums)):
            answer[i] = prefix
            prefix *= nums[i]
        postfix = 1
        for i in range(len(nums) - 1, -1, -1):
            answer[i] *= postfix
            postfix *= nums[i]
        return answer