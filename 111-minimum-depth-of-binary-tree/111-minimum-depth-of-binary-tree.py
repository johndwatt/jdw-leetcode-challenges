# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# DFS recursive
class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        if not root: return 0
        left, right = self.minDepth(root.left), self.minDepth(root.right)
        return 1 + (min(left, right) or max(left, right))