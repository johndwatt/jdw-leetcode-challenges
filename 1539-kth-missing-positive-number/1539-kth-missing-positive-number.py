class Solution:
    def findKthPositive(self, arr: List[int], k: int) -> int:
        map = {}
        for i in range(len(arr)):
            map[arr[i]] = i
        count = 1
        result = 0
        while count <= len(arr) + k:
            if not count in map:
                result += 1
            if result == k:
                return count
            count += 1