class Solution:
    def compare_sets(self, small_set: Set[int], large_set: Set[int]) -> List[int]:
        result = []
        for i in small_set:
            if i in large_set:
                result.append(i)
        return result
    
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        set1 = set(nums1)
        set2 = set(nums2)
        if len(set1) > len(set2):
            return self.compare_sets(set2, set1)
        else:
            return self.compare_sets(set1, set2)