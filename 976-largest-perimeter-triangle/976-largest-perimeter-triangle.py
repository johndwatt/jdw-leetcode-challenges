class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:
        nums.sort()
        for i in range(len(nums) - 1, 1, -1):
        # if the sum of 2 sides is larger than the last side
            if(nums[i-2] + nums[i-1] > nums[i]):
                # return the area of the triangle
                return nums[i] + nums[i-1] + nums[i-2]
        return 0
            
# A non-zero triangle means the sum of 2 sides is larger than the last side