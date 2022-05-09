class Solution:
    def countBalls(self, lowLimit: int, highLimit: int) -> int:
        
        def numSum (n):
            sum1 = 0
            while n:
                sum1 += n % 10
                n = n // 10
            return sum1
            
        containers = {}
        for i in range(lowLimit, highLimit + 1):
            num = numSum(i)
            if num in containers:
                containers[num] += 1
            else:
                containers[num] = 1
            
        return max(containers.values())
